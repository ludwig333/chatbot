<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Model;

class FacebookConfiguration extends Model
{
    protected $guarded = [];

    public function connections()
    {
        return $this->morphMany(BotConnection::class, 'connectable');
    }
}
