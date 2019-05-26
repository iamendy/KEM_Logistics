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

        <div class="wrapper mb-5">
            <div class="profile-card js-profile-card">
                <div class="profile-card__img">
                    <img src="../assets/img/driver.jpg" alt="profile card">
                </div>

                <div class="profile-card__cnt js-profile-cnt">
                    <div class="profile-card__name">Lola Adeogun</div>
                    <div class="profile-card__txt">  <b> <i class="ti-star"></i>  <i class="ti-star"></i>  <i class="ti-star"></i>  <i class="ti-star"></i></b> <i class="ti-star"></i></div>
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
                            <div class="profile-card-inf__txt"> 9 Barracks  - 8 Badagry Road </div>
                        </div>

                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"><i class="ti-time"></i></div>
                            <div class="profile-card-inf__txt">25minutes</div>
                        </div>

                        <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title"> <i class="ti-car"></i> </div>
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
    import {mapState} from 'vuex';

    export default {
        name: "Payment",
        data(){
            return {
                amount: 1500
            }
        },
        computed: {
            myRef() {
                return this.refGenerator()
            },
            ...mapState(['user', 'public_key'])
        },
        methods: {
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
                            txref: this.myRef
                        };
                        if (response.tx.chargeResponseCode === "00" || response.tx.chargeResponseCode === "0") {
                            //mocking server validation url
                            router.push({
                                name: 'payment-verification',
                                params: {request: request}
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
