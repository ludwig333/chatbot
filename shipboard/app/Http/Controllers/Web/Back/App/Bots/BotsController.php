<?php

namespace App\Http\Controllers\Web\Back\App\Bots;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\BotRepositories;
use Inertia\Inertia;
use App\Bot;
use Illuminate\Support\Facades\DB;
use App\Models\BotCommand;

class BotsController extends Controller
{
    private $botRepository;

    public function __construct(BotRepositories $botRepository)
    {
        $this->botRepository = $botRepository;
    }

    public function handle($uuid)
    {
        $botman = app('botman');

        $botman->listen();

        $bot = Bot::where('uuid', $uuid)->first();

        $commands = $bot->commands;
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       try {
           DB::beginTransaction();

//           $this->validate($request, [
//               'name'        => ['required', 'string', 'max:255'],
//               'welcome_text' => ['required', 'string', 'max:255'],
//               'username'  => ['required'],
//               'access_key'       => ['required'],
//           ]);

           $bot = Bot::create([
               'name' => $request->get('name'),
               'welcome_text' => $request->get('welcome_text'),
               'user_id' => auth()->user()->id
           ]);

           DB::table('telegram_config')->insert([
               'bot_id' => $bot->id,
               'username' => $request->get('username'),
               'access_token' => $request->get('access_key')
           ]);

           BotCommand::create([
               'command' => 'Hi',
               'reply' => $bot->welcome_text,
               'bot_id' => $bot->id,
           ]);

           DB::commit();
           session()->flash('message', __('app.messages.bot-created'));

           return back();
       } catch (\Exception $exception) {
           DB::rollBack();
       }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bot = Bot::where('uuid',$id)->first();
        $setting = DB::table('telegram_config')->where('bot_id', $bot->id)->first();

        $bot->username = $setting->username;
        $bot->access_key = $setting->access_token;

        $commands = BotCommand::where('bot_id', $bot->id)->get();

        return Inertia::render('back/app/bots/show', [
            'bot'    => $bot,
            'commands' => $commands
        ]);

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
//            $this->validate($request, [
//                'name'        => ['required', 'string', 'max:255'],
//                'welcome_text' => ['required', 'string', 'max:255'],
//                'username'  => ['required'],
//                'access_key'       => ['required'],
//            ]);

            $bot = Bot::where('uuid', $request->get('uuid'))->first();

            $bot->update([
                'name' => $request->get('name'),
                'welcome_text' => $request->get('welcome_text')
            ]);

            DB::table('telegram_config')->where('bot_id', $bot->id)->update([
                'username' => $request->get('username'),
                'access_token' => $request->get('access_key')
            ]);

            DB::commit();
            session()->flash('message', __('Bot updated successfully.'));

            return back();
        } catch (\Exception $exception) {
            DB::rollBack();
        }
    }

}
