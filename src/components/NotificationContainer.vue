<template>
    <div class="notification-container">
        <NotificationBar
                v-for="notification in notifications"
                :key="notification.id"
                :notification="notification"
        />
    </div>
</template>

<script>
    import NotificationBar from './NotificationBar.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            NotificationBar
        },
        computed: {
            ...mapState('notification', ['notifications'])
        }
    }
</script>

<style scoped>
    .notification-container {
        text-align: center;
        position: fixed;
        bottom: 10px;
        right: 0;
        background: linear-gradient(to right, #16c0b0, #84cf6a);
        font-weight: 600;
        box-shadow: 2px 2px #39b982;
        width: 300px;
        z-index: 1000;
    }
</style>
