<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockHistory extends Model
{
    use HasFactory;
    protected $table = 'stock_history';
    
    protected $fillable = [
        'type',
        'comment',
        'ordonnance',
        'quantite',
        'stock_id',
        'user_id',
        'etab_id',
        'detaine_id',
        'region_id',
    ];
    
    
    
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.stock-histories.index");
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
    * Many to One Relationship to \App\Models\Detainee::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function detaine() {
        return $this->belongsTo(\App\Models\Detainee::class,"detaine_id","id");
    }

    /**
    * Many to One Relationship to \App\Models\Establishment::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function etab() {
        return $this->belongsTo(\App\Models\Establishment::class,"etab_id","id");
    }

    /**
    * Many to One Relationship to \App\Models\Establishment::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function region(){
        return $this->belongsTo(Region::class , 'region_id');
    }
    /**
    * Many to One Relationship to \App\Models\Stock::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function stock() {
        return $this->belongsTo(\App\Models\Stock::class,"stock_id","id");
    }
    /**
    * Many to One Relationship to \App\Models\User::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function user() {
        return $this->belongsTo(\App\Models\User::class,"user_id","id");
    }
}
