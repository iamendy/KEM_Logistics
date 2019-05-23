<template>
    <div>
        <h4>Thanks for choosing us! <i class="fa fa-hand-peace"></i></h4>
        <h6>A receipt has also been sent to your email. We hope to see you again.</h6>

        <br> <br>
        <i style="color: #ccc"> Here's how the payment is split between the driver and KEM Logistics</i>

        <br><br>
        <div class="summary">
            <h6>Amount paid: N{{summary.tx.amount}}</h6>
            <h6> Rave Fees: N{{summary.tx.appfee}} @ 1.4% </h6>
            <h6>KLog share: N{{kLog}} @ 10% </h6>
            <h6>Driver(Mighty Joe) share: N{{driver}} @ 90% </h6>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            summary: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                driver: null,
                kLog: null
            }
        },
        created() {
            this.calculateSplitPayment();
        },
        methods: {
            calculateSplitPayment() {
                //(total amount - (rave fees + commission)
                this.kLog = 0.1 * this.summary.tx.amount;
                this.driver = this.summary.tx.amount - (this.summary.tx.appfee + this.kLog);
            }
        }
    }
</script>
