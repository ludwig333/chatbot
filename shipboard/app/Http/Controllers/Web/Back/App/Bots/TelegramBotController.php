<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use Illuminate\Http\Request;
use BotMan\BotMan\Drivers\DriverManager;
use BotMan\BotMan\BotManFactory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use BotMan\BotMan\BotMan;
use App\Bot;
use App\Http\Middleware\Bot\ReceivedMiddleware;
use App\Models\BotCommand;

class TelegramBotController extends Controller
{
    public function __invoke($id, Request $request)
    {
        Log::info($request->getBaseUrl());
        $config = DB::table('telegram_config')->where('bot_id', $id)->first();
        $welcome_text = Bot::where('id', $id)->first()->welcome_text;

        $config = [
            'telegram' => [
                'token' => $config->access_token
            ]
        ];
        // Load the driver(s) you want to use
        DriverManager::loadDriver(\BotMan\Drivers\Telegram\TelegramDriver::class);
        // Create an instance
        $botman = BotManFactory::create($config);

        //Applying middleware
//        $botman->middleware->received(new ReceivedMiddleware($id));

        //Welcome text when the bot is triggered
        $botman->hears('/start', function (BotMan $bot) use ($welcome_text) {
           $bot->reply($welcome_text);
        });

        // Give the bot something to listen for.
        $botman->hears('(.*)', function (BotMan $bot) use($id) {
            $message = $bot->getMessage()->getText();
            if($message == '/start'){
                return;
            }
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
