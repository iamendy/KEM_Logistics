<template>
    <div>
        <h4>Oops!</h4>
        <h6>{{message}}</h6>

        <router-link :to="{ name: 'payment' }">Go back</router-link>
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
