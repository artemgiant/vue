/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);
import Dashboard from './components/dashboard';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';
import Test from './components/companies/test';
import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import indexCountries from './components/countries/CountriesIndex.vue';
import editCountry from './components/countries/editCountry.vue';
import createCountry from './components/countries/createCountry.vue';




const routes = [

    {
        path: '/',
        components: {
            dashboard: Dashboard
        },
        name:'Dashboard'
    },

    {path: '/admin/companies', component: CompaniesIndex,name:'companiesIndex' },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
    {path: '/admin/test', component: Test, name: 'Test'},
    {path:'/admin/countries',component: indexCountries, name: 'indexCountries'},
    {path:'/admin/countries/edit/:id',component: editCountry, name: 'editCountry'},
    {path:'/admin/countries/create',component: createCountry, name: 'createCountry'},

]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')
