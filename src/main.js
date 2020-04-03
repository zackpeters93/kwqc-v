import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App),
  data: {
    // use an array for collection
    todos: [],
    // and null for documents
    currentTodo: null
  },
  firestore: {
    // todos: db.collection("todos"),
    // currentTodo: db.collection("todos").doc("1")
  }
}).$mount('#app')
