<?php

use App\Company;
use App\Country;
use Illuminate\Database\Seeder;

class CompanyCreate extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $County = Country::find(1);
        $Company = new Company();
        $Company->name = "UKCompany";
            $Company->address = "Kiev";
           $Company->website = 'UK.com';
        $Company->email = 'UK@gmail.com';
        $Company->save();
        $Company->countries()->attach($County);
//                'name', 'address', 'website', 'email'
    }
}
