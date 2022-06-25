<?php
namespace App\Http\Requests\Detainee;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;
use App\Models\Detainee;
class StoreDetainee extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can('create',Detainee::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'cin' => ['nullable', Rule::unique('detainees', 'cin'), 'string'],
            'code' => ['nullable', Rule::unique('detainees', 'code'), 'string'],
            'profile_photo_path' => ['nullable', 'string'],
            'birthday' => ['nullable', 'date'],
            'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
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
