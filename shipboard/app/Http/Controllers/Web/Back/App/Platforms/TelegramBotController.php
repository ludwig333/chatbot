<?php

namespace App\Http\Controllers\Web\Back\App\Platforms;

use Illuminate\Http\Request;
use BotMan\BotMan\Drivers\DriverManager;
use BotMan\BotMan\BotManFactory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use BotMan\BotMan\BotMan;
use App\Http\Middleware\Bot\ReceivedMiddleware;
use App\Models\Bot\Bot;
use App\Models\Bot\BotCommand;
use App\Models\Bot\TelegramConfiguration;
use BotMan\Drivers\Telegram\TelegramDriver;

class TelegramBotController extends Controller
{
    public function __invoke($id, Request $request)
    {
        $bot = Bot::where('uuid', $id)->first();
        $botId = $bot->id;
        $config = TelegramConfiguration::where('bot_id', $bot->id)->first();
        $config = [
            'telegram' => [
                'token' => $config->access_token
            ]
        ];
        // Load the driver(s) you want to use
        DriverManager::loadDriver(TelegramDriver::class);
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
                $bot->reply('Sorry could not understand YOU!!.');
            }
        });

        // Start listening
        $botman->listen();
    }
}
