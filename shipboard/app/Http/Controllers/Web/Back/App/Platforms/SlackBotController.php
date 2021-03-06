<?php

namespace App\Http\Controllers\Web\Back\App\Platforms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Bot\Bot;
use BotMan\BotMan\Drivers\DriverManager;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\BotMan;
use App\Models\Bot\BotCommand;
use App\Models\Bot\SlackConfiguration;
use Illuminate\Support\Facades\Log;

class SlackBotController extends Controller
{
    public function __invoke($id, Request $request)
    {

        if($request->get('challenge')) {
            return [
                'challenge' => $request->get('challenge')
            ];
        }

        $bot = Bot::where('uuid', $id)->first();
        $botId = $bot->id;
        $config = SlackConfiguration::where('bot_id', $bot->id)->first();
        $config = [
            'slack' => [
                'token' => $config->access_token
            ]
        ];

        // Load the driver(s) you want to use
        DriverManager::loadDriver(\BotMan\Drivers\Slack\SlackDriver::class);
        // Create an instance
        $botman = BotManFactory::create($config);


        // Give the bot something to listen for.
        $botman->hears('(.*)', function (BotMan $bot) use($botId) {
            $message = $bot->getMessage()->getText();

            $command = BotCommand::where('bot_id', $botId)->where('command', $message)->first();
            if($command) {
                $bot->reply($command->response);
            } else {
                $bot->reply('Sorry could not understand YOU!!.');
            }
        });

        // Start listening
        $botman->listen();
    }

}
