<template>
    <div>
    <div class="box">
        <div class="spinner spinner--4"></div>
    </div>
    </div>
</template>
<script>
    import router from '../router';
    import {mapActions, mapState} from 'vuex'

    export default {
        props: {
            request: {
                type: Object,
                required: true
            },
        },
        mounted() {
            this.letsVerifyPayment();
        },
        computed: mapState(['secret']),
        methods: {
            ...mapActions(['verifyPayment']),
            letsVerifyPayment() {
                let payload = {
                    SECKEY: this.secret,
                    txref: this.request.txref
                };
                //Using an action to post payload to RAVE verification url
                this.verifyPayment(payload)
                    .then(({data}) => {
                        if (
                            this.request.amount === data.data.amount
                            &&
                            this.request.currency === data.data.currency
                            &&
                            this.request.txref === data.data.txref
                            &&
                            data.status === "success"
                        ) {
                            //redirect to confirmation page
                            router.push({
                                name: 'payment-ok',
                                params: {
                                    summary: data
                                }
                            })
                        } else {
                            //invalidated response
                            router.push({
                                name: 'payment-failed',
                                params: {
                                    message: 'Your payment cannot be verified. Please try again'
                                }
                            })
                        }
                    })
                    .catch(() => {
                        router.push({
                            name: 'payment-failed',
                            params: {
                                message: 'An Error occurred while trying to verify your payment. Please try again'
                            }
                        })
                    })
            }
        }
    }
</script>

<style scoped>
     .box {
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0 0 1px rgba(0, 0, 0, .8);
    }
    .box .spinner {
        height: 40px;
        width: 40px;
        background: rgba(0, 0, 0, .2);
        border-radius: 50%;
    }

     .box .spinner--4 {
        transform: scale(0);
        background: rgba(0, 0, 0, .8);
        opacity: 1;
        animation: spinner4 800ms linear infinite;
    }
    @keyframes spinner4 {
        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }

</style>
