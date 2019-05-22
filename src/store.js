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
            email: 'hr@flutterwave.com',
            country: 'Nigeria'
        },
        secret: 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X',
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
