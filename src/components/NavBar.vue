<template>
  <div id="nav">
      <!--================Header Menu Area =================-->
      <header class="header_area">
          <div class="main_menu">
              <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <router-link :to="{ name: 'home' }" class="navbar-brand logo_h"> KLog </router-link>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <!-- Collect the nav links, forms, and other content for toggling -->
                      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                          <ul class="nav navbar-nav menu_nav ml-auto">
                              <li class="nav-item"> <a href="https://github.com/iamendy/KEM_Logistics" target="_blank" class="nav-link"> Github Repo </a> </li>
                              <li class="nav-item"><router-link :to="{ name: 'payment' }" class="nav-link"> Pay for ride </router-link></li>
                          </ul>
                      </div>
                      <div class="right-button">
                          <ul>
                              <li class="nav-item"> <router-link :to="{ name: 'bvn' }" class="sign_up"> BVN Verification </router-link> </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
      </header>
      <!--================Header Menu Area =================-->
  </div>
</template>
<script>
    export default{
        name: 'NavBar'
    }
</script>
