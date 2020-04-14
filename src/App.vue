<template>
  <div id="app">
    <Navigation :user='user' @logout='logout'/>
    <router-view
      class="container-fluid"
      :user='user'
      :error='error'
      @logout='logout'
      @addEmployee='addEmployee'
    />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Firebase from 'firebase'
import { db } from '@/db/index.js'

export default {
  name: 'App',
  data: function () {
    return {
      user: null,
      error: null,
      employee: []
    }
  },
  methods: {
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('login')
        })
    },
    addEmployee: function (payload) {
      db.collection('employees')
        .add({
          badge: payload.badge_value,
          first_name: payload.first_name_value,
          last_name: payload.last_name_value,
          gmaw_p: payload.gmaw_p_value,
          smaw: payload.smaw_value,
          saw: payload.saw_value,
          gtaw: payload.gtaw_value,
          t1: payload.t1_value,
          sst_smaw: payload.sst_smaw_value,
          sst_fcaw: payload.sst_fcaw_value,
          t5: payload.t5_value,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  },
  mounted () {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user

        db.collection('users')
          .doc(this.user.uid)
          .collection('meetings')
          .onSnapshot(snapshot => {
            const snapData = []
            snapshot.forEach(doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              })
            })
            this.meetings = snapData
          })
      }
    }
    )
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
// $primary: #140a9a;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
