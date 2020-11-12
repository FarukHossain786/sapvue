<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">My Contacts</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <template v-if="!currentUser">
            <li>
                <router-link to="/login" class="nav-link">Login</router-link> 
            </li>
            <li>
                <router-link to="/register" class="nav-link">Register</router-link>
            </li>
        </template>
        <template v-else>
            <li>
                <router-link to="/customers" class="nav-link">List</router-link>
            </li>
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" href="#" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                  {{currentUser.name }}<span class="caret"></span>
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a href="#!" @click.prevent="logout" class="dropdown-item">Logout</a>
                </div>
            </li>
        </template>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
    name:'app-header',
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
        }
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser;
        }
    }
}
</script>
