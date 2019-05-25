<template>
    <div>
        <h4> BVN Verification </h4>
        <h6> We want you to have a seamless payment experience. So here's a BVN Verifier to ensure nothing goes wrong in the future</h6>
        <form @submit.prevent="bvnProcessor">
        <input type="number" v-model.number="bvn" required>
        <div class="btn-wrapper">
            <button class="button -fill-gradient" :disabled="processing"> Verify my BVN </button>
        </div>
        </form>
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
