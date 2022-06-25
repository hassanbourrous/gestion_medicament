<?php
namespace App\Http\Requests\Stock;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;
use App\Models\Stock;
class StoreStock extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return $this->user()->can('create',Stock::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {

        // [
        //     'date_production' => ['nullable', 'date', 'before:date_dexpiration'],
        //     'date_dexpiration' => ['nullable', 'date', 'after:date_production'],
                    
        //     'estum' => ['array', 'nullable'],
        //     'medicament' => ['array', 'nullable'],

            
        //     'type' => ['required', 'string'],

        //     'comment' => ['nullable', 'string'],
        //     'ordonnance' => ['nullable', 'string'],
        //     'quantite' => ['nullable', 'integer'],
                    
        //     'detaine' => ['array', 'nullable'],
        //     'etab' => ['array', 'nullable'],
        //     'stock' => ['array', 'nullable'],
        //     'user' => ['array', 'nullable'],
        //     'region' => ['array', 'nullable'],
                
        // ];

        $ActionType = $this->get('type');
        $roles = [];
        $default_roles = [
            'type' => ['required', 'string'],
            'quantite' => ['required', 'integer','min:1'],
            'comment' => ['nullable', 'string'],
            'ordonnance' => ['nullable', 'string'],
        ];
        if($ActionType == "dr_provenance"){
            $roles = [
                'estum' => ['array', 'nullable'],
                'region' => ['array', 'nullable'],
                'medicament' => ['array', 'nullable'],
                'date_production' => ['nullable', 'date', 'before:date_dexpiration'],
                'date_dexpiration' => ['nullable', 'date', 'after:date_production'],
            ];
        }elseif($ActionType == "etab_provenance"){
            $roles = [
                'estum' => ['array', 'nullable'],
                'etab' => ['array', 'nullable'],
                'medicament' => ['array', 'nullable'],
                'date_production' => ['nullable', 'date', 'before:date_dexpiration'],
                'date_dexpiration' => ['nullable', 'date', 'after:date_production'],
            ];
        }elseif($ActionType == "achats"){
            $roles = [
                'estum' => ['array', 'nullable'],
                'medicament' => ['array', 'nullable'],
                'date_production' => ['nullable', 'date', 'before:date_dexpiration'],
                'date_dexpiration' => ['nullable', 'date', 'after:date_production'],
            ];
        }elseif($ActionType == "etab_transfere"){
            $roles = [
                'etab' => ['array', 'nullable'],
                'stock' => ['array', 'nullable'],
            ];
        }elseif($ActionType == "consommation"){
            $roles = [
                'detaine' => ['array', 'nullable'],
                'stock' => ['array', 'nullable'],
            ];
        }elseif($ActionType == "detruit"){
            $roles = [
                'stock' => ['array', 'nullable'],
            ];
        }

        return array_merge($default_roles , $roles);
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
