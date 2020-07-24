<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateBotCommandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'response' => 'required',
            'bot_id' => 'required|exists:bots,id',
            'command' => [
                'required',
                 Rule::unique('bot_commands')
                    ->where('bot_id', $this->bot_id)
            ]
        ];
    }

    /**
     * Get the input values from create bot command form
     *
     * @return array
     */
    public function getInputValues()
    {
        return $this->only([
            'command',
            'response',
            'bot_id'
        ]);
    }
}
