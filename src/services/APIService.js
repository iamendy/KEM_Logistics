import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export default {
  verifyBVN(bvn, secret) {
    return apiClient.get('/' + bvn + '?seckey=' + secret)
  },
    getPaymentAPI(){
      return
    }
}
