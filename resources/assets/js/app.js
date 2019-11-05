/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';
import indexCountries from './components/companies/test';




const routes = [

    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        },
        name:'CompaniesIndex'
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
    {path: '/admin/test', component: Test, name: 'Test'},
    {path: '/admin/countries', component: indexCountries, name: 'indexCountries'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')
