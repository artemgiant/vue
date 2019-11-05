<template>
    <div>

        <div class="form-group">
            <router-link :to="{name: 'companiesIndex'}" class="btn btn-success">Companies</router-link>
        </div>
        <div class="form-group">
            <router-link :to="{name: 'indexCountries'}" class="btn btn-success">Countries</router-link>
        </div>
        </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped>

</style>