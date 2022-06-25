<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicament extends Model
{
    use HasFactory;

    protected $fillable = [
        'dosage',
        'nom_commercial',
        'presentation',
        'ref',
        'category_id',
    ];
    
    protected $dates = [
        ];
    public $timestamps = false;
    
    protected $appends = ["api_route", "can" , 'title'];

    /* ************************ ACCESSOR ************************* */

    public function getTitleAttribute(){
        return $this->nom_commercial . " " .$this->dosage ." ".$this->presentation;
    }

    public function getApiRouteAttribute() {
        return route("api.medicaments.index");
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

    /* ************************ RELATIONS ************************ */
    /**
    * Many to One Relationship to \App\Models\Category::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function category() {
        return $this->belongsTo(\App\Models\Category::class,"category_id","id");
    }
}
