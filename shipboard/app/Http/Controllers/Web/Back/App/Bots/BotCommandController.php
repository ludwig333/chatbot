<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BotCommand;

class BotCommandController extends Controller
{
    public function store(Request $request)
    {
        BotCommand::create([
            'command' => $request->get('command'),
            'reply' => $request->get('reply'),
            'bot_id' => $request->get('bot_id'),
        ]);

        session()->flash('message', __('Command added successfully.'));

        return back();

    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
