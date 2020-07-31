<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;

class TelegramConfiguration extends Model
{
    protected $guarded = [];

    public function connections()
    {
        return $this->morphMany(BotConnection::class, 'connectable');
    }
}
