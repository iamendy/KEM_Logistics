import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});

export default {
    verifyPayment(payload) {
        return apiClient.post('/verify', payload)
    },
}
