<?php

namespace App\Http\Controllers\Web\Back\App\Platforms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bot\Bot;
use BotMan\BotMan\Drivers\DriverManager;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\BotMan;
use App\Models\Bot\BotCommand;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Models\Bot\FacebookConfiguration;
use BotMan\Drivers\Facebook\FacebookDriver;

class FacebookBotController extends Controller
{
    public function __invoke($id, Request $request)
    {
        $bot = Bot::where('uuid', $id)->first();
        $botId = $bot->id;
        $config = FacebookConfiguration::where('bot_id', $bot->id)->first();
        if($request->get('hub_mode') == 'subscribe') {
            if($request->get('hub_verify_token') == $config->verification_code) {
                return $request->get('hub_challenge');
            }
        }
        // Load the driver(s) you want to use
        DriverManager::loadDriver(FacebookDriver::class);
        $config = [
            'facebook' => [
                'token' => $config->access_token,
                'app_secret' => $config->app_secret,
                'verification'=> $config->verification_code,
            ]
        ];
        // Load the driver(s) you want to use
        DriverManager::loadDriver(\BotMan\Drivers\Facebook\FacebookDriver::class);
        // Create an instance
        $botman = BotManFactory::create($config);

        //Applying middleware
//        $botman->middleware->received(new ReceivedMiddleware($id));

        // Give the bot something to listen for.
        $botman->hears('(.*)', function (BotMan $bot) use($botId) {
            $message = $bot->getMessage()->getText();
            $command = BotCommand::where('bot_id', $botId)->where('command', $message)->first();
            if($command) {
                $bot->reply($command->response);
            } else {
                $bot->reply('Sorry could not understand you.');
            }
        });

        // Start listening
        $botman->listen();
    }
}
