<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\BotCommand;

class Bot extends Model
{
    protected $table = 'bots';

    protected $fillable = [
        'name',
        'welcome_text',
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

        static::creating(function ($project) {
            $project->uuid = Str::uuid();
        });
    }

    public function commands()
    {
        return $this->hasMany(BotCommand::class, 'bot_id');
    }
}
