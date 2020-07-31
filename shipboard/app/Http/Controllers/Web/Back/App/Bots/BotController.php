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
use App\Http\Requests\UpdatePlatformConfiguration;
use App\Models\Bot\BotConfiguration;
use App\Jobs\RegisterTelegramBot;
use App\Constants\PlatformConstant;
use App\Models\Bot\TelegramConfiguration;
use App\Models\Bot\SlackConfiguration;
use Illuminate\Support\Facades\DB;
use App\Models\Bot\FacebookConfiguration;

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
        $baseUrl = env('TARGET_URL');

        return Inertia::render('back/app/bots/show', [
            'bot'    => $bot,
            'commands' => $commands,
            'base_url' => $baseUrl,
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

    public function updateConfiguration(UpdatePlatformConfiguration $request, $id)
    {
        try {
            DB::beginTransaction();
            $bot = Bot::where('uuid', $id)->firstOrFail();

            if($request->get('platform') == PlatformConstant::TELEGRAM) {
                $config = TelegramConfiguration::updateOrCreate(['bot_id' => $bot->id], $request->getInputValues());
                $config->connections()->create(['bot_id' => $bot->id]);
//                if($config->platform == PlatformConstant::TELEGRAM) {
//                    RegisterTelegramBot::dispatch($config, $bot->uuid);
//                }
                (new TelegramServices())->register($config->access_token, $bot->uuid);
            } else if($request->get('platform') == PlatformConstant::SLACK) {
                $config = SlackConfiguration::updateOrCreate(['bot_id' => $bot->id], $request->getInputValues());
                $config->connections()->create(['bot_id' => $bot->id]);
            } else if($request->get('platform') == PlatformConstant::FACEBOOK) {
                $config = FacebookConfiguration::updateOrCreate(['bot_id' => $bot->id], $request->getInputValues());
                $config->connections()->create(['bot_id' => $bot->id]);
            }

            DB::commit();
            session()->flash('message', __('Bot '. $config->platform . ' configuration updated successfully.'));
            return back();

        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception);
            session()->flash('error', __('Failed to update configuration.'));
            return back();
        }
    }

}
