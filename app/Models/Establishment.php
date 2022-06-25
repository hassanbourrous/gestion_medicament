<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Establishment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];
    
    protected $dates = [
        ];
    public $timestamps = false;
    
    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.establishments.index");
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
        return $date->format('Y-m-d H:i:s');
    }
    
    public function getGroupeAttribute(): string
    {
        if ($this->region) {
            $group = $this->region->name;
        } else {
            $group = "Others";
        }
        return $group;
    }

    /* ************************ RELATIONS ************************ */
    public function region(){
        return $this->belongsTo(Region::class , 'region_id');
    }

    public function users(){
        return $this->belongsToMany(User::class, 'establishment_user', 'estab_id', 'user_id');
    }


}
