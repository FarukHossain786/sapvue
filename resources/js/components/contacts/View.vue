<template>
    <div class="customer-view" id="view" v-if="customer">
        <div class="user-img">
            <img src="">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <td>ID</td>
                    <td>{{customer.id}}</td>
                </tr>
                 <tr>
                    <td>Name</td>
                    <td>{{customer.name}}</td>
                </tr>
                 <tr>
                    <td>Phone</td>
                    <td>{{customer.phone}}</td>
                </tr>
                 <tr>
                    <td>Email</td>
                    <td>{{customer.email}}</td>
                </tr>
                 <tr>
                    <td>Website</td>
                    <td>{{customer.website}}</td>
                </tr>
            </table>
            <router-link to="/customers">Back</router-link>
        </div>

    </div>
</template>
<script>
export default {
    name:'view-customer',
    created() {
        axios.get(`/api/customers/${this.$route.params.id}`, {
            headers:{
                    'Authorization':`Bearer ${this.currentUser.token}`
                }
        })
        .then((response)=>{
            this.customer = response.data.customer
        });
    },
    data(){
        return {
            customer: null
        };
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        }
    }
}
</script>
<style scoped>

</style>