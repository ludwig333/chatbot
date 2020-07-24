<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BotCommand extends Model
{
    protected $table="bot_commands";

    protected $fillable=[
        'command',
        'response',
        'bot_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($command) {
            $command->uuid = Str::uuid();
        });
    }


    public function bot() {
        return $this->belongsTo(Bot::class, 'id', 'bot_id');
    }
}
