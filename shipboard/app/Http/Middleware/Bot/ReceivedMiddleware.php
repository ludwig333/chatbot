<?php


namespace App\Http\Middleware\Bot;


use BotMan\BotMan\Interfaces\Middleware\Received;
use BotMan\BotMan\Messages\Incoming\IncomingMessage;
use BotMan\BotMan\BotMan;

class ReceivedMiddleware implements Received
{

    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function received(IncomingMessage $message, $next, BotMan $bot)
    {
        return $next($message);
    }
}
