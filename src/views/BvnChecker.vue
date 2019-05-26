<template>
    <div>
        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
            <div class="container text-center">
                <h2>VERIFY YOUR BVN</h2>
                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                    To open up full access features!
                </nav>
            </div>
        </section>
        <!--================Hero Banner Area End =================-->

        <!--================Blog Area =================-->
        <section class="blog_area area-padding">
            <div class="container">
                <div class="bvn">
                    <form class="form">
                        <input v-model.number="bvn" type="number" class="form__field" placeholder="Enter your BVN"/>
                        <button type="button" class="btn btn--primary btn--inside uppercase" :disabled="processing" @click="bvnProcessor" > {{ processing ? 'verifying' : 'verify' }} </button>
                    </form>
                </div>
            </div>
        </section>
        <!--================Blog Area =================-->
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Nprogress from 'nprogress'

    export default {
        name: "BvnChecker",
        data(){
            return {
                bvn: null,
                processing: false
            }
        },
        methods:{
            ...mapActions(['verifyBVN']),
            bvnProcessor () {
                if(this.verifyInput(this.bvn)){
                    this.processing = true;
                    Nprogress.start();
                    this.verifyBVN(this.bvn)
                        .then(()=> {
                            this.bvn = null;
                            Nprogress.done();
                            this.processing = false
                        })
                        .catch( () => {
                            this.bvn = null;
                            Nprogress.done();
                            this.processing = false
                        })
                } else {
                    this.$store.dispatch('notification/add', {type: 'error', message: 'Invalid BVN. Kindly check your input'});
                }
            },
            verifyInput(bvn){
                    return bvn >= 0 && bvn.toString().length === 11;
            }
        },
    }
</script>
