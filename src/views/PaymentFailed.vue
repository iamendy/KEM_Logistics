<template>
    <div>
        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
            <div class="container text-center">
                <h2>Oops!</h2>
                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                    There was an error processing your payment
                </nav>
            </div>
        </section>
        <!--================Hero Banner Area End =================-->
        <div>

            <div class="section-top-border my-5 text-center">
                <div aria-label="breadcrumb" class="banner-breadcrumb">
                    Please try again later
                </div>

                <p>
                    <router-link :to="{ name: 'payment' }">Go back</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PaymentFailed',
    props:{
        message: {
            type: String,
            required: true
        }
    }
}
</script>
