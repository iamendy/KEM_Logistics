<template>
    <div>
    <!--================Hero Banner Area Start =================-->
    <section class="hero-banner d-flex align-items-center">
        <div class="container text-center">
            <h2>Oops!</h2>
        </div>
    </section>
    <!--================Hero Banner Area End =================-->
    <div>

        <div class="section-top-border my-5 text-center">
            <div aria-label="breadcrumb" class="banner-breadcrumb">
                The page you're looking for is not here.
            </div>

            <p>
            <router-link :to="{ name: 'home' }">Go back Home</router-link>
            </p>
        </div>
    </div>
    </div>
</template>
<script>

</script>
