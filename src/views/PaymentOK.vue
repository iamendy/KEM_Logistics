<template>
    <div>
        <h4>Thanks for choosing us! <i class="fa fa-hand-peace"></i></h4>
        <h6>A receipt has also been sent to your email. We hope to see you again.</h6>

        <router-link :to="{ name: 'payment' }">Want another ride?</router-link>

        <br> <br>
        <i style="color: #ccc"> Payment and splitting successful, and a page is displayed to the user notifying him/her of the successful transaction. The payment can be viewed on KEM Logistics dashboard </i>

    </div>
</template>
<script>
    export default {
        props: {
            summary: {
                type: Object,
                required: true
            }
        }
    }
</script>
