<template>
<div class="container">
    <div class="card">
        <div class="card-body text-center">
            <h3 class="text-color">Hello I am {{users.name}} welcome to my app</h3>
        </div>
    </div>
</div>

</template>
<script>
export default {
    name:'home-page',
    computed:{
        users(){
            return this.$store.getters.currentUser
        }
    }
}
</script>
<style scoped>
.text-color{
    color: sienna;
}
</style>