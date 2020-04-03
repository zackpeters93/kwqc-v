<template>
  <div class="home">
    <div class="mt-3">
      <div class="text-secondary text-center">
        Welcome back,
        <span class="font-weight-bold text-info">{{ user.displayName }}</span>
      </div>
    </div>
    <br />
    <b-container class="bv-example-row">
      <b-alert show>Default Alert</b-alert>
    </b-container>

    <div>
      <h1>Welcome</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['user']
}
</script>
