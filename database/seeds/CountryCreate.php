<?php

use App\Company;
use App\Country;
use Illuminate\Database\Seeder;

class CountryCreate extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Company= Company::find(1);
        $County =  new Country();
        $County->title = 'Ukraine';
        $County->code = 'UK';
        $County->save();
        $County->coupanies()->attach($Company);
    }
}
