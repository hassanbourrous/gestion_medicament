<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Database\Eloquent\Model;

class Detainee extends Model
{
    use HasFactory;
    use HasProfilePhoto;
    protected $table = 'detainees';

    protected $fillable = [
        'profile_photo_path',
        'first_name',
        'last_name',
        'code',
        'cin',
        'birthday',
    ];
    
    
    protected $dates = [
        'birthday',
        'created_at',
        'updated_at',
        ];
    
    protected $appends = ["api_route", "can" , 'profile_photo_url', 'title'];

    /* ************************ ACCESSOR ************************* */

    public function getTitleAttribute(){
        return $this->first_name . " " .$this->last_name ." ".$this->code." ".$this->cin;
    }

    public function getApiRouteAttribute() {
        return route("api.detainees.index");
    }
    public function getCanAttribute() {
        return [
            "view" => \Auth::check() && \Auth::user()->can("view", $this),
            "update" => \Auth::check() && \Auth::user()->can("update", $this),
            "delete" => \Auth::check() && \Auth::user()->can("delete", $this),
            "restore" => \Auth::check() && \Auth::user()->can("restore", $this),
            "forceDelete" => \Auth::check() && \Auth::user()->can("forceDelete", $this),
        ];
    }

    protected function serializeDate(DateTimeInterface $date) {
        return $date->format('d-m-Y');
    }

    /* ************************ RELATIONS ************************ */

    public function establishment(){
        return $this->belongsTo(Establishment::class , 'esta_id');
    }
}
