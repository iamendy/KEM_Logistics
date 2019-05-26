<template>
    <div>

        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
            <div class="container text-center">
                <h2>Your payment was successful!</h2>
                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                    A receipt has been sent to your email. We hope to see you again.
                </nav>
            </div>
        </section>
        <!--================Hero Banner Area End =================-->


        <div class="section-top-border">
            <h6 class="mb-30 title_color my-3 text-center"> Here's the settlement report for the amount of N{{this.summary.data.chargedamount}} received for this ride with Transaction reference:  [#{{this.summary.data.txref}}] </h6>
            <div class="progress-table-wrap">
                <div class="progress-table">
                    <div class="table-head">
                        <div class="serial">#</div>
                        <div class="country">Entity</div>
                        <div class="visit">Amount</div>
                        <div class="percentage">Percentage</div>
                    </div>
                    <div class="table-row">
                        <div class="serial">01</div>
                        <div class="country"><b>K Log</b></div>
                        <div class="visit"> N{{merchantCommission}}</div>
                        <div class="percentage">
                            <div class="progress">
                                <div class="progress-bar color-1" role="progressbar" style="width: 10%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="serial">02</div>
                        <div class="country"> <b>Driver</b></div>
                        <div class="visit"> N{{driverCommission}} </div>
                        <div class="percentage">
                            <div class="progress">
                                <div class="progress-bar color-2" role="progressbar" style="width: 90%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="serial">03</div>
                        <div class="country"> <b> Rave fee</b></div>
                        <div class="visit">N{{this.summary.data.appfee}}</div>
                        <div class="percentage">
                            <div class="progress">
                                <div class="progress-bar color-3" role="progressbar" style="width: 1.4%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from '../router'
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
