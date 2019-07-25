<template>
  <div id="nav">
      <!--================Header Menu Area =================-->
      <header class="header_area">
          <div class="main_menu">
              <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <router-link :to="{ name: 'home' }" class="navbar-brand logo_h"> iPexels </router-link>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <!-- Collect the nav links, forms, and other content for toggling -->
                      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                          <ul class="nav navbar-nav menu_nav ml-auto">
                              <li class="nav-item"> <a href="#" target="_blank" class="nav-link"> Github Repo </a> </li>
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
