<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
  protected $fillable = ['title','code'];

  public function coupanies(){

      return $this->belongsToMany(Company::class);
  }

}
