<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;

class BotConfiguration extends Model
{
    protected $table = 'bot_configurations';


    public function bot()
    {
        return $this->belongsTo(Bot::class, 'id', 'bot_id');
    }
}
