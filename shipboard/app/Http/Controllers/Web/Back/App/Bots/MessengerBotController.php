<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bot\Bot;
use BotMan\BotMan\Drivers\DriverManager;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\BotMan;
use App\Models\Bot\BotCommand;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class MessengerBotController extends Controller
{
    public function __invoke($id, Request $request)
    {
        $config = DB::table('messenger_config')->where('bot_id', $id)->first();

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
        $botman->hears('(.*)', function (BotMan $bot) use($id) {
            $message = $bot->getMessage()->getText();

            $command = BotCommand::where('bot_id', $id)->where('command', $message)->first();
            if($command) {
                $bot->reply($command->reply);
            } else {
                $bot->reply('Sorry could not understand you.');
            }
        });

        // Start listening
        $botman->listen();
    }
}
