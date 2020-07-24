<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use App\Http\Controllers\Controller;
use App\Models\Bot\BotCommand;
use App\Http\Requests\CreateBotCommandRequest;
use App\Http\Requests\UpdateBotCommandRequest;
use Illuminate\Support\Facades\Log;

class BotCommandController extends Controller
{
    public function store(CreateBotCommandRequest $request)
    {
        try {
            BotCommand::create($request->getInputValues());

            session()->flash('message', __('Command added successfully.'));

            return back();
        } catch (\Exception $exception) {
            Log::error($exception);
            session()->flash('error', __('Failed to add command.'));
            return back();
        }

    }

    public function update(UpdateBotCommandRequest $request, $id)
    {
        try {
            BotCommand::where('uuid', $id)->update($request->getInputValues());

            session()->flash('message', __('Command updated successfully.'));

            return back();
        } catch (\Throwable $exception) {
            Log::error($exception);
            session()->flash('error', __('Failed to update command.'));
            return back();
        }
    }

    public function destroy($id)
    {
        try {
            BotCommand::where('uuid', $id)->delete();

            session()->flash('message', __('Command deleted successfully.'));
        } catch (\Exception $exception) {
            Log::error($exception);
            session()->flash('error', __('Failed to delete command.'));
            return back();
        }
    }
}
