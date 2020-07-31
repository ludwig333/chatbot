<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;

class SlackConfiguration extends Model
{
    protected $guarded = [];

    public function connections()
    {
        return $this->morphMany(BotConnection::class, 'connectable');
    }
}
