<template>
    <div>
        <h4>Thanks for choosing us!</h4>
        <h6>A receipt has also been sent to your email. We hope to see you again.</h6>
        <div class="center">
            <h1><i class="fa fa-hand-peace .h1"></i></h1>
        </div>
        <br> <br>
        <i style="color: #ccc"> Here's how the payment is split between the driver and KEM Logistics [90%, 10%] respectively</i>

        <br><br>
        <div class="summary">
            <h6>Amount paid: N{{summary.tx.amount}}</h6>
            <h6> Rave Fees: N{{raveFee}} @ 1.4% </h6>
            <h6>Driver(Lola Adeogun) share: N{{driver}} @ 90% </h6>
            <h6>KLog share: N{{kLog}} @ 10% </h6>
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
            txRef: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                driver: null,
                kLog: null,
                raveFee: null,
            }
        },
        created() {
            this.calculateSplitPayment();
        },
        methods: {
            calculateSplitPayment() {
                //(total amount - (rave fee + commission)
                this.kLog = 0.1 * this.summary.tx.amount;
                this.raveFee = this.summary.tx.appfee;
                this.driver = this.summary.tx.amount - (this.raveFee + this.kLog);
            }
        }
    }
</script>
