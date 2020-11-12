import {getLocalUser} from './helpers/auth';

const user =getLocalUser();

export default{
    state:{
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null,
        customers:[]
    },
    getters:{
        currentUser(state){
            return state.currentUser;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        isLoading(state){
            return state.loading;
        },
        authError(state){
            return state.authError;
        },
        customers(state){
            return state.customers;
        },
    },
    mutations:{
        login(state){
            state.loading= true;
            state.authEerror =null;
        },
        loginSuccess(state, payload){
            state.authError =null;
            state.isLoggedIn =true;
            state.loading =false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));

        },
        loginFailed(state, payload){
            state.loading= true;
            state.authError =payload.error;
        },
        logout(state){
            localStorage.removeItem("user");
            state.isLoggedIn =false;
            state.currentUser =null;
        },
        updateCustomer(state, payload){
            state.customers =payload;
        }
    },
    actions:{
        login(context){
            context.commit("login");
        },
        getCustomers(context){
            axios.get('/api/customers', {
                headers:{
                    'Authorization':`Bearer ${context.state.currentUser.token}`
                }
            })
            .then((response)=>{
                context.commit('updateCustomer', response.data.customers);
            })
        }
    }
}