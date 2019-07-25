   <template>
    <section>

        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
            <div class="container text-center">
                <h2>Your images are ready!</h2>
            </div>
        </section>
        <!--================Hero Banner Area End =================-->

        <div class="container my-5">
        <div class="row">
            <div v-for="photo in photos" class="col-xs-6 col-sm-3">
                <a :href="photo.url" class="thumbnail">
                    <img :src="photo.src.medium" alt="..." class="img-fluid rounded" style="height: 120px; object-fit: contain">
                    <div class="caption">
                        <small>Happy image shot by:</small>
                        <p> <a :href="photo.photographer_url">{{photo.photographer}}</a></p>
                    </div>
                </a>
            </div>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination text-center">
                <li v-if="result.previous_page" class="page-item"><a class="page-link" @click="getMorePost(previous)">Previous Page</a></li>

                <li v-if="result.next_page" class="page-item"><a class="page-link" @click="getMorePost(next)">Next Page</a></li>
            </ul>
        </nav>
        </div>
    </section>
</template>
<script>
    export default {
      data(){
        return{
          nextPage: null,
          previousPage: null,
          photos: []
        }
      },
        props: {
            result: {
                type: Object,
                required: true
            },
        },
        /*computed: {
            subAccountID(){
                let x = JSON.parse(this.summary.data.meta[2].metavalue);
                return  x.RS_92DF547567BF7B558ACE8174A91662A2
            },
        },*/
      methods:{
        parseResults: function () {
          this.photos = this.result.photos;
          this.nextPage = this.result.next_page ? this.result.next_page : null;
          this.previousPage = this.result.previous_page ? this.result.previous_page : null
        },
        getMorePosts: function(value){
          if(value === 'next'){

          } else {

          }
        }
      },
      created() {
          this.parseResults();
      }
    }
</script>
