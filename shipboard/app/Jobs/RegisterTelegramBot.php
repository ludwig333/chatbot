<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Bot\BotConfiguration;
use App\Services\TelegramServices;
use Illuminate\Support\Facades\Log;

class RegisterTelegramBot implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $botConfiguration;
    private $botUuid;

    /**
     * RegisterTelegramBot constructor.
     * @param BotConfiguration $botConfiguration
     * @param $botUuid
     */
    public function __construct(BotConfiguration $botConfiguration, $botUuid)
    {
        $this->botConfiguration = $botConfiguration;
        $this->botUuid = $botUuid;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if(env('APP_ENV') == 'production') {
            (new TelegramServices())->register($this->botConfiguration->access_token, $this->botUuid);
        }
    }
}
