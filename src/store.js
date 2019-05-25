import Vue from 'vue'
import Vuex from 'vuex'
import api from './services/APIService'
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
        public_key: 'FLWPUBK-d35406e9f177ea2f4205680aafe0f239-X', //For payment processing
        secret: 'FLWSECK-114ccc07bb309dc90e6aa2084e92354a-X', //for BVN Verification
        bvn: {},
    },
    mutations: {
        SET_BVN: state => bvn => state.bvn = bvn
    },
    actions: {
        verifyBVN({state, commit, dispatch}, bvn) {
            return api.verifyBVN(bvn, state.secret)
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
        }
    }
})
