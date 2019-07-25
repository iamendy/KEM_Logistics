<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view :key="$route.fullPath"/>
      <Footer></Footer>
  </div>
</template>

<script>
    import NavBar from './components/NavBar';
    import Footer from './components/Footer';
    export default {
        components: {
            NavBar,
            Footer
        },

    }
</script>

<style>

</style>
