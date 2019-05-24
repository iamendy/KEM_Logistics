import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.ravepay.co/v2/kyc/bvn`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export default {
  verifyBVN(bvn, secret) {
    return apiClient.get('/' + bvn + '?seckey=' + secret)
  },
}
