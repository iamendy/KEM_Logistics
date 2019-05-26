<template>
  <div id="app">
    <NavBar></NavBar>
      <Notification />
    <router-view/>
      <Footer></Footer>
  </div>
</template>

<script>
    import NavBar from './components/NavBar';
    import Footer from './components/Footer';
    import Notification from './components/NotificationContainer'
    export default {
        components: {
            NavBar,
            Notification,
            Footer
        }
    }
</script>

<style>

</style>
