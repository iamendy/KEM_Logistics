import Vue from 'vue'
import Vuex from 'vuex'
import bvnAPI from './services/bvnVerificationAPI'
import paymentAPI from './services/paymentVerificationAPI';
import notification from './modules/notification'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        notification,
    },
    state: {
        user: {
            id: 'abc123',
            firstname: 'Nnamdi',
            lastname: 'Umeh',
            phone: '07066425471',
            email: 'endeking@gmail.com',
            country: 'Nigeria',
            currency: 'NGN',
        },
        public_key: 'FLWPUBK-0b914e8b17169a17bae1ecffe888c94b-X', //For payment processing
        secret: 'FLWSECK-f64df19dd8a24e371878b08fbab80eb8-X', //for BVN Verification
        bvn: {},
    },
    mutations: {
        SET_BVN: state => bvn => state.bvn = bvn
    },
    actions: {
        verifyBVN({state, commit, dispatch}, bvn) {
            return bvnAPI.verifyBVN(bvn, state.secret)
                .then( ({data}) => {
                    const notification = {
                        type: 'success',
                        message: 'Yeee Haw!! Your BVN has been Validated!!'
                    };
                    commit('SET_BVN', data);
                    dispatch('notification/add', notification)
                })
                .catch( err => {
                    const notification = {
                        type: 'error',
                        message: 'Ooops!! We couldn\'t verify your BVN'
                    };
                    dispatch('notification/add', notification);
                    throw err;
                })
        },
        verifyPayment({commit}, payload){
            return paymentAPI.verifyPayment(payload)
        }
    }
})
