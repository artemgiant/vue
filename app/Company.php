<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'address', 'website', 'email'];

    public function countries(){
        return $this->belongsToMany(Country::class);
    }
}
