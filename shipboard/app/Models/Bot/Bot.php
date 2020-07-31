<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Bot extends Model
{
    protected $table = 'bots';

    protected $fillable = [
        'name',
        'user_id'
    ];

    /**
     * Bootstrap the model and its traits.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($bot) {
            $bot->uuid = Str::uuid();
        });
    }

    public function commands()
    {
        return $this->hasMany(BotCommand::class, 'bot_id');
    }

    public function configurations()
    {
        return $this->hasMany(BotConnection::class, 'bot_id')->with('connectable');
    }

}
