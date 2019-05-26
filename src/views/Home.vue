<template>
    <div class="home">
        <!--================Home Banner Area =================-->
        <section class="home_banner_area">
            <div class="banner_inner d-flex align-items-center">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                            <div class="banner_content">
                                <h3>More Than Just an App<br/>It's a lifestyle</h3>
                                <p>We're connecting riders with the best local drivers at the best prices. When you ride with K Log, we do our best to make the ride as seamless and comfortable as possible.</p>
                                <router-link :to="{ name: 'payment' }" class="banner_btn"> Book a Ride Now <i class="ti-arrow-right"></i> </router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!--================End Home Banner Area =================-->



        <!--================About  Area =================-->
        <section class="about-area area-padding-bottom">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-6">
                        <div class="area-heading">
                            <h4>Get home safely<br> and smarter </h4>
                            <h6>Transportation isn’t the only thing we’re changing through our technology </h6>

                            <p>In addition to helping you get from point A to point B, we're working to bring the future closer with self-driving technology and urban air transport, helping people order food quickly and affordably, and helping companies provide a seamless employee travel experience.</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6">
                                <div class="single-about">
                                    <div class="about-icon">
                                        <i class="ti-car"></i>
                                    </div>
                                    <div class="single-about-content">
                                        <h5>On Time Arrival</h5>
                                        <p>Your safety is essential. That's our commitment, and technology is at the heart of our approach. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6">
                                <div class="single-about">
                                    <div class="about-icon">
                                        <i class="ti-thought"></i>
                                    </div>
                                    <div class="single-about-content">
                                        <h5>Bespoke Comfort</h5>
                                        <p>It’s our goal to create a cabin that is inclusive and where that authenticity is celebrated as a strength. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================About Area End =================-->
    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>
