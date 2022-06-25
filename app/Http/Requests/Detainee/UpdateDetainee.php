<?php

namespace App\Http\Requests\Detainee;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class UpdateDetainee extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->detainee);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'first_name' => ['sometimes', 'string'],
            'last_name' => ['sometimes', 'string'],
            'cin' => ['nullable', Rule::unique('detainees', 'cin')->ignore($this->detainee->getKey(), $this->detainee->getKeyName()), 'string'],
            'code' => ['nullable', Rule::unique('detainees', 'code')->ignore($this->detainee->getKey(), $this->detainee->getKeyName()), 'string'],
            'profile_photo_path' => ['nullable', 'string'],
            'birthday' => ['nullable', 'date'],
            'establishment' => ['array', 'nullable'],
        ];
    }

    /**
     * Modify input data
     *
     * @return array
     */
    public function sanitizedArray(): array
    {
        $sanitized = $this->validated();
        //Add your code for manipulation with request data here

        return $sanitized;
    }
    /**
    * Return modified (sanitized data) as a php object
    * @return  object
    */
    public function sanitizedObject(): object {
        $sanitized = $this->sanitizedArray();
        return json_decode(collect($sanitized));
    }
}
