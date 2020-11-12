import Home from './components/Home';
import Login from './components/auth/Login';
import Customer from './components/contacts/Main';
import CustomerList from './components/contacts/List';
import New from './components/contacts/New';
import View from './components/contacts/View';


export const routes =[
    {
        path: '/',
        component: Home,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/login',
        component: Login
    },
    {
        path: '/customers',
        component: Customer,
        meta:{
            requiresAuth:true
        },
        children:[
            {
                path:'/',
                component: CustomerList
            },
            {
                path:'new',
                component: New
            },
            {
                path:':id',
                component: View
            }
        ]
    }
    
];