<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Komatsu Welder Qualification Check</router-link>
        <div class="navbar-nav ml-auto">
          <router-link
            class="nav-item nav-link text-white"
            to="/welds"
            v-if="user"
            >Weld Types</router-link
          ><router-link
            class="nav-item nav-link text-white"
            to="/employees"
            v-if="user"
            >Employees</router-link
          ><router-link
            class="nav-item nav-link text-white"
            to="/login"
            v-if="!user"
            >Login</router-link
          >
          <!-- Emergency Logout -->
          <!-- &nbsp;&nbsp;&nbsp;<a
                href="#"
                role="button"
                class="text-white"
                @click="$emit('logout')"
                >logout</a
              > -->
          <div v-if="user">
            <div class="nav-item nav-link text-white">
              |
              <span class="font-weight-bold text-light">{{
                user.displayName
              }}</span
              >&nbsp;&nbsp;&nbsp;<a
                href="#"
                role="button"
                class="text-white"
                @click="$emit('logout')"
                ><i class="far fa-times-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['user']
}
</script>
