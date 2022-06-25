<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;
    protected $table = 'stocks';

    protected $fillable = [
        'date_dexpiration',
        'date_production',
        'esta_id',
        'medicament_id',
        'quantite',
    ];
    
    protected $dates = [
        'date_dexpiration' => 'Y-m-d',
        'date_production' => 'Y-m-d',
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can" , 'title' ];

    /* ************************ ACCESSOR ************************* */

    public function getTitleAttribute(){
        $this->estum;
        return $this->medicament->title . " (" .$this->quantite .") ".$this->date_dexpiration;
    }
    public function getApiRouteAttribute() {
        return route("api.stocks.index");
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
        return $date->format('Y-m-d');
    }

    /* ************************ RELATIONS ************************ */
    /**
    * Many to One Relationship to \App\Models\Establishment::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function estum() {
        return $this->belongsTo(\App\Models\Establishment::class,"esta_id","id");
    }
    /**
    * Many to One Relationship to \App\Models\Medicament::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function medicament() {
        return $this->belongsTo(\App\Models\Medicament::class,"medicament_id","id");
    }
}
