<template>
    <div class="home">
        <!--================Home Banner Area =================-->
        <section class="home_banner_area">
            <div class="banner_inner d-flex align-items-center">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                            <div class="banner_content">
                                <h3>Pexels just got<br/>more interesting</h3>
                                <p>
                                    Welcome to iPexels. We give you HD images for free!
                                    Just enter a word, and iPexels will fetch related images, just for you!
                                </p>
                                <p>
                                    <input type="text" v-model="search" class="input">
                                </p>
                                <a @click="processRequest" class="banner_btn"> Get me the photos </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!--================End Home Banner Area =================-->
    </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'home',
    data() {
      return {
        search: ''
      }
    },
    methods: {
      processRequest: function () {
        axios.get('https://api.pexels.com/v1/search?query=' + this.search +  '&per_page=20&page=1', {
            headers: {
              'Authorization': '563492ad6f91700001000001a133960b5f9544a78c93331665b2f58c'
            }
          }
        )
          .then(res => {
            router.push({
              name: 'payment-ok',
              params: {
                result: res.data
              }
            })
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>
