
<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new country</div>
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
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                country: {
                    title: '',
                    code: '',
                }
            }
        },
        methods: {
            saveForm() {
                var app = this;
                var newcountry = app.country;
                axios.post('/api/v1/contries', newcountry)
                    .then(function (resp) {
                        app.$router.push({path: '/admin/countries'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your country");
                    });
            }
        }
    }
</script>
