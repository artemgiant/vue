<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'companiesIndex'}" class="btn  btn-primary">Coupanies</router-link>
        </div>
        <div class="form-group">

            <router-link :to="{name: 'createCountry'}" class="btn btn-success">Create country</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Companies list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th width="100px">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="country, index in contries">
                        <td>{{ country.title }}</td>
                        <td>{{ country.code }}</td>
                        <td>
                            <router-link :to="{name: 'editCountry',params: {id: country.id}}" class="btn btn-default">Edit</router-link>
                            <a class="btn btn-xs btn-danger" href="#" v-on:click="deleteEtity(country.id,index)"> Delete</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            data: function () {
            return {
                contries: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/contries')
                .then(function (resp) {

                    app.contries = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load companies");
                });
        },
        methods:{
            deleteEtity(id,index){
                var app=this;
                 axios.delete('/api/v1/contries/'+id).then(function (resp) {

                     app.contries.splice(index,1);
                 }).catch(function (resp) {
                     alert('Cound not delete company');
                 });
            }
        }
    }
</script>

<style scoped>

</style>