<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">Edit country</div>
            <div class="panel-body">
                <form v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">country name</label>
                            <input type="text" v-model="country.title" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">country address</label>
                            <input type="text" v-model="country.code" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            let app = this;
            let id = app.$route.params.id;
            app.countryID = id;
            axios.get('/api/v1/contries/'+id).then(function (resp) {
                app.country = resp.data;

            }).catch(function (resp) {
            })
        },
        data: function () {
            return {
                countryID:'',
                country: {
                    title: '',
                    code:''
                }
            }
        },
        methods: {
            saveForm(){
                let app = this;
                let newCountry = app.country;
                axios.patch('/api/v1/contries/' +app.countryID,newCountry).then(function (resp) {
                    app.$router.replace('/admin/countries/');
                }).catch(function (resp) {
                    console.log(resp);
                    alert('error');
                })
            }
        }
    }
</script>

<style scoped>

</style>