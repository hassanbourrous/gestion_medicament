<?php

namespace App\Http\Requests\StockHistory;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class UpdateStockHistory extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->stockHistory);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'type' => ['sometimes', 'string'],
            'comment' => ['nullable', 'string'],
            'ordonnance' => ['nullable', 'string'],
            'quantite' => ['nullable', 'integer'],
            'detaine' => ['array', 'nullable'],
            'etab' => ['array', 'nullable'],
            'stock' => ['array', 'nullable'],
            'user' => ['array', 'nullable'],
            'region' => ['array', 'nullable'],
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
