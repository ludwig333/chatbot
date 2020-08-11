<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;

class BotConnection extends Model
{
    protected $guarded = [];

    public function bot()
    {
        return $this->belongsTo(Bot::class, 'id', 'bot_id');
    }
    public function connectable()
    {
        return $this->morphTo();
    }
}
