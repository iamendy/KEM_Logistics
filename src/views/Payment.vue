<template>
    <div>
        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
            <div class="container text-center">
                <h2>WE'VE ARRIVED!</h2>
                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                    Hope you enjoyed the ride?
                </nav>
            </div>
        </section>
        <!--================Hero Banner Area End =================-->

        <div class="box" v-show="processing">
            <div class="spinner spinner--4"></div>
        </div>


        <div class="wrapper mb-5">
            <div class="profile-card js-profile-card">
                <div class="profile-card__img">
                    <img src="../assets/img/driver.jpg" alt="profile card">
                </div>

                <div class="profile-card__cnt js-profile-cnt">
                    <div class="profile-card__name">Lola Adeogun</div>
                    <div class="profile-card__txt"><b> <i class="ti-star"></i> <i class="ti-star"></i> <i
                            class="ti-star"></i> <i class="ti-star"></i></b> <i class="ti-star"></i></div>
                    <div class="profile-card-loc">
                        <span class="profile-card-loc__txt">NGN 1500</span>
                    </div>

                    <div class="profile-card-inf">
                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"><i class="ti-link"></i></div>
                            <div class="profile-card-inf__txt">{{myRef}}</div>
                        </div>

                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"><i class="ti-map-alt"></i></div>
                            <div class="profile-card-inf__txt"> 9 Barracks - 8 Badagry Road</div>
                        </div>

                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"><i class="ti-time"></i></div>
                            <div class="profile-card-inf__txt">25minutes</div>
                        </div>

                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"><i class="ti-car"></i></div>
                            <div class="profile-card-inf__txt">30km</div>
                        </div>
                    </div>

                    <div class="profile-card-ctr" style="text-align: center">
                        <button class="btn btn--primary uppercase --separate" @click="payWithRave">Pay for Ride</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import router from '../router';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Payment",
        data() {
            return {
                amount: 1500,
                processing: true
            }
        },
        computed: {
            myRef() {
                return this.refGenerator()
            },
            ...mapState(['user', 'public_key', 'secret'])
        },
        methods: {
            ...mapActions(['verifyPayment']),
            payWithRave() {
                let x = getpaidSetup({
                    PBFPubKey: this.public_key,
                    customer_email: this.user.email,
                    amount: this.amount,
                    currency: this.user.currency,
                    customer_phone: this.user.phone,
                    customer_firstname: this.user.firstname,
                    customer_lastname: this.user.lastname,
                    txref: this.myRef,
                    subaccounts: [
                        {
                            id: "RS_92DF547567BF7B558ACE8174A91662A2",
                            transaction_charge_type: 'percentage',
                            transaction_charge: 0.1
                        }
                    ],
                    meta: [{
                        metaname: "BikeID",
                        metavalue: "KL151"
                    }],
                    onclose: () => {
                    },
                    callback: (response) => {
                        //verification data
                        let request = {
                            amount: this.amount,
                            currency: this.user.currency,
                            txref: this.myRef,
                        };
                        if (response.tx.chargeResponseCode === "00" || response.tx.chargeResponseCode === "0") {
                            //Server validation action
                            this.processing = true;
                            this.verifyPayment(request)
                                .then(res => {
                                    //redirect to confirmation page
                                    router.push({
                                        name: 'payment-ok',
                                        params: {
                                            summary: res.data.data
                                        }
                                    })
                                })
                                .catch(err => {
                                    this.processing = false;
                                    console.log(err)
                                })
                        } else {
                            router.push({
                                name: 'payment-failed',
                                params: {message: 'We could not process your request at this time. Please try again later'}
                            })
                        }
                        x.close();
                    }
                })
            },
            refGenerator() {
                let text = "";
                let possible = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz123456789";

                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
        },
    }
</script>
<style>
    .box {
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0 0 1px rgba(0, 0, 0, .8);
        position: relative;
        z-index: 5000;
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
