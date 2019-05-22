<template>
  <div id="app">
    <NavBar></NavBar>
      <transition name="fade">
      <Notification />
      </transition>
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
