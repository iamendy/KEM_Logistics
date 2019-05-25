<template>
  <div id="app">
    <NavBar></NavBar>
      <Notification />
    <router-view/>
  </div>
</template>

<script>
    import NavBar from './components/NavBar';
    import Notification from './components/NotificationContainer'
    export default {
        components: {
            NavBar,
            Notification
        }
    }
</script>

<style>

</style>
