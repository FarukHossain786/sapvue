<template>
    <div class="customer-new">
        <form @submit.prevent = "add">
            <table class="table">
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Cusromer Name"/>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Cusromer Email"/>
                    </td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Cusromer Phone"/>
                    </td>
                </tr>
                <tr>
                    <td>Website</td>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Cusromer Website"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/customers" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right"> 
                        <input type="submit" class="btn btn-primary" value="Create"/>
                    </td>
                </tr>
            </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n')}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import validate from 'validate.js';
export default {
    name:'New',
    data(){
        return{
            customer:{
                name:'',
                email:'',
                phone:'',
                website:''
            },
            errors:null
        };
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser;
        }
    },
    methods:{
        add(){
            this.errors= null;
            const validates = this.getValidate();

            const errors = validate(this.$data.customer, validates);

            if(errors){
                this.errors = errors;
                return;
            }

            axios.post('/api/customers/new', this.$data.customer,{
                headers:{
                    'Authorization':`Bearer ${this.currentUser.token}`
                }
            })
            .then((response)=>{
                this.$router.push('/customers');
            })
        },
        getValidate(){
            return{
                name:{
                    presence: true,
                    length:{
                        minimum: 3,
                        message:"must be getter than 3 !"
                    }
                },
                email:{
                    presence: true,
                    email:true,
                },
                phone:{
                   presence: true,
                    numericality:true,
                    length:{
                        minimum: 10,
                        message:"must be getter than 10 !"
                    }
                },
                website:{
                   presence: true,
                    url:true,
                }
            }
        }   
    }
}
</script>
<style scoped>
    .errors{
        background-color: rgb(90, 14, 14);
        color: seashell;
    }
</style>