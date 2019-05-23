<template>
    <div>
        <h4> WE'VE ARRIVED! </h4>
        <h5> We do hope you enjoyed the ride! Now here's your route summary and bill:</h5>
        <p><i class="fa fa-user-tag space"></i> Your Rider: <i> Mighty Joe </i> </p>
        <div>
            <p><i class="fa fa-ticket-alt space"></i> Invoice ID: {{myRef}}</p>
            <p><i class="fa fa-route space"></i> 8 Providence Street, Lekki - 10 Greenville estate, Ajah</p>
            <p><i class="fa fa-clock space"></i> Duration: 30mins</p>
            <p><i class="fa fa-motorcycle space"></i> Distance: 24km </p>
            <p><i class="fa fa-money-bill-alt space"></i> Amount: N1500</p>
        </div>

        <div class="btn-wrapper">
            <button class="button -fill-gradient" type="button" @click="payWithRave">Pay for Ride</button>
        </div>

        <br> <br>
        <i style="color: #ccc"> This is the customer app page. When He/She clicks on "pay for ride button', and makes payment, the Payment will be split in the ratio 20:80 (as defined by KEM Logistics on the merchant dashboard) between KEM Logistics and Mighty Joe respectively (after rave charge is deducted)</i>
        <br>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        name: "Payment",
        data() {
            return {
                ride_summary: {},
                apiPublickey: 'FLWPUBK-8c95ebea5cae616a1504fc0ba4b92ba4-X',
                myRef: this.refGenerator()
            }
        },
        methods: {
            payWithRave() {
                var x = getpaidSetup({
                    PBFPubKey: this.apiPublickey,
                    customer_email: "me@example.com",
                    amount: 1500,
                    currency: "NGN",
                    customer_phone: '07066425471',
                    customer_firstname: 'Nnamdi',
                    customer_lastname: 'Umeh',
                    txref: this.myRef,
                    subaccounts: [
                        {
                            id: "RS_178E1017821CCC6F4145C10FC3E0829A"
                        }
                    ],
                    meta: [{
                        metaname: "BikeID",
                        metavalue: "KL151"
                    }],
                    onclose: function () {
                    },
                    callback: function (response) {
                        if (
                            response.tx.chargeResponseCode === "00" ||
                            response.tx.chargeResponseCode === "0"
                        ) {
                            router.push({
                                name: 'payment-ok',
                                params: { summary: response }
                            })
                        } else {
                            router.push({
                                name: 'payment-failed',
                                params: { summary: response }
                            })
                        }

                        x.close();
                    }
                })
            },
            refGenerator(){
                    let text = "";
                    let possible = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz123456789";

                    for( let i=0; i < 10; i++ )
                        text += possible.charAt(Math.floor(Math.random() * possible.length));

                    return text;
            }
        }
    }
</script>

<style scoped>

</style>
