<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use App\Http\Controllers\Controller;
use App\Repositories\BotRepositories;
use Inertia\Inertia;
use App\Services\TelegramServices;
use App\Http\Requests\CreateBotRequest;
use App\Models\Bot\Bot;
use App\Http\Requests\UpdateBotRequest;
use Illuminate\Support\Facades\Log;

class BotController extends Controller
{
    private $botRepository;


    public function __construct(BotRepositories $botRepository)
    {
        $this->botRepository = $botRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('back/app/bots/index', [
            'bots'    => $this->botRepository->getAuthenticatedUserBots()
        ]);
    }


    /**
     * Create a new bot
     *
     * @param CreateBotRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(CreateBotRequest $request)
    {
       try {
           Bot::create($request->getInputValues());

           session()->flash('message', __('Bot created successfully.'));

           return back();
       } catch (\Throwable $exception) {
           Log::error($exception);
           session()->flash('error', __('Failed to create bot.'));
           return back();
       }
    }

    /**
     * Display bots detail with its commands
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bot = Bot::where('uuid',$id)->first();

        $commands = $this->botRepository->getBotCommands($bot->id);

        return Inertia::render('back/app/bots/show', [
            'bot'    => $bot,
            'commands' => $commands
        ]);

    }


    /**
     * Update bot from uuid
     *
     * @param UpdateBotRequest $request
     * @param $id //uuid of the bot
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Throwable
     */
    public function update(UpdateBotRequest $request, $id)
    {
        try {
            Bot::where('uuid', $id)->update($request->getInputValues());

            session()->flash('message', __('Bot updated successfully.'));

            return back();
        } catch (\Throwable $exception) {
            Log::error($exception);
            session()->flash('error', __('Failed to update bot.'));
            return back();
        }
    }

    public function destroy($id)
    {
        try {
            Bot::where('uuid', $id)->delete();

            session()->flash('message', __('Bot deleted successfully.'));

            return redirect()->route('app:bots.index');
        } catch (\Exception $exception) {
            Log::error($exception);
            session()->flash('error', __('Failed to delete bot.'));
            return back();
        }
    }

    public function connect($id)
    {
        $config = DB::table('telegram_config')->where('bot_id', $id)->first();
        if($config) {
            (new TelegramServices())->register($config->access_token, $id);
        }

        return back();
    }

}
