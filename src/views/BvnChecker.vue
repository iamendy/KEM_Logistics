<template>
    <div>
        <h4> BVN Checker </h4>
        <h6> We want you to have a seamless payment experience. So here's a BVN checker to ensure nothing goes wrong in the future</h6>
        <form @submit.prevent="bvnProcessor">
        <input type="number" v-model.number="bvn" required>
        <div class="btn-wrapper">
            <button class="button -fill-gradient"> Verify my BVN </button>
        </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Nprogress from 'nprogress'
    export default {
        name: "BvnChecker",
        data(){
            return {
                bvn: null
            }
        },
        methods:{
            ...mapActions(['verifyBVN']),
            bvnProcessor () {
                Nprogress.start();
                this.verifyBVN(this.bvn)
                    .then(()=> {
                        this.bvn = null;
                        Nprogress.done();
                    })
                    .catch( () => {
                        this.bvn = null;
                        Nprogress.done();
                    })
            }
        },
    }
</script>

<style scoped>

</style>
