<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BotCommand extends Model
{
    protected $table="bot_commands";

    protected $fillable=[
        'command',
        'reply',
        'bot_id'
    ];
}
