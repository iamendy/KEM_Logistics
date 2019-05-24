<template>
    <div>
        <h4> WE'VE ARRIVED! </h4>
        <h5> We do hope you enjoyed the ride! Now here's your route summary and bill:</h5>
        <h6><i class="fa fa-user-tag space"></i> Your Rider: <i>Lola Adeogun </i></h6>
        <div>
            <h6><i class="fa fa-ticket-alt space"></i> Invoice ID: {{myRef}}</h6>
            <h6><i class="fa fa-route space"></i> 8 Providence Street, Lekki - 10 Greenville estate, Ajah</h6>
            <h6><i class="fa fa-clock space"></i> Duration: 30mins</h6>
            <h6><i class="fa fa-motorcycle space"></i> Distance: 24km </h6>
            <h6><i class="fa fa-money-bill-alt space"></i> Amount: N1500</h6>
        </div>

        <div class="btn-wrapper">
            <button class="button -fill-gradient" type="button" @click="payWithRave">Pay for Ride</button>
        </div>

        <br> <br>
        <div class="info">
            <i> This is the customer page after ride. When the customer clicks on "pay for ride' button,
            and makes
            payment successfully, the amount will be split(as defined by K Log) between K Log and the driver. (Click
            'Pay for ride' to Proceed)</i>
        </div>
        <br>
    </div>
</template>

<script>
    import router from '../router';
    import {mapState} from 'vuex';

    export default {
        name: "Payment",
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
                    amount: 1500,
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
                    callback: function (response) {
                        if (response.tx.chargeResponseCode === "00" || response.tx.chargeResponseCode === "0") {
                            //extra validation
                            if (response.tx.txRef === this.txref && response.tx.amount === this.amount) {
                                router.push({
                                    name: 'payment-ok',
                                    params: {summary: response}
                                })
                            } else {
                                router.push({
                                    name: 'payment-failed',
                                })
                            }
                        } else{

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
            }
        }
    }
</script>
