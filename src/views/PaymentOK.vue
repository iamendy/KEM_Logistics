<template>
    <div>
        <h4>Thanks for choosing us!</h4>
        <h6>A receipt has also been sent to your email. We hope to see you again.</h6>
        <div class="center">
            <h1><i class="fa fa-hand-peace .h1"></i></h1>
        </div>
        <br> <br>
        <i style="color: #ccc"> Here's how the payment is split between the driver and KEM Logistics [90%, 10%]
            respectively</i>
        <br><br>
        <div class="summary">
            <h6>Amount paid: N{{this.summary.data.chargedamount}}</h6>
            <h6>invoice id: N{{this.summary.data.txref}}</h6>
            <h6> Rave Fees: N{{this.summary.data.appfee}}</h6>
            <h6>Driver(Lola Adeogun) share: N{{driverCommission}} </h6>
            <h6>KLog Commission: N{{merchantCommission}} </h6>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            summary: {
                type: Object,
                required: true
            },
        },
        computed: {
            subAccountID(){
                let x = JSON.parse(this.summary.data.meta[2].metavalue);
                return  x.RS_92DF547567BF7B558ACE8174A91662A2
            },
            merchantCommission() {
                return this.subAccountID.merchant_commission
            },
            driverCommission() {
                return this.subAccountID.subaccount_earning
            },
        },
    }
</script>
