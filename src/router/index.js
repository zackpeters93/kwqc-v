import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Meetings from '../views/Meetings.vue'
import Register from '../views/Register.vue'
import Welds from '../views/Welds.vue'
import Employees from '../views/Employees.vue'
import AddEmployee from '../views/AddEmployee.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/welds',
    name: 'Welds',
    component: Welds
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/addemployee',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
