<?php

namespace App\Repositories;

use App\Models\Bot\Bot;
use App\Models\Bot\BotCommand;

class BotRepositories {

    public function getAuthenticatedUserBots()
    {
        return Bot::where('user_id', auth()->user()->id)->get();
    }

    public function getUserBots($user)
    {
        return Bot::where('user_id', $user->id)->get();
    }

    public function getBotCommands($id)
    {
        return BotCommand::where('bot_id', $id)
            ->get()
            ->map(function ($command) {
                return [
                    'uuid' => $command->uuid,
                    'command' => $command->command,
                    'response' => $command->response,
                ];
            });
    }
}
