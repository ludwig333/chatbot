<?php

namespace App\Repositories;

use App\Bot;

class BotRepositories {

    public function getAuthenticatedUserBots()
    {
        return Bot::where('user_id', auth()->user()->id)->get();
    }

    public function getUserBots($user)
    {
        return Bot::where('user_id', $user->id)->get();
    }
}
