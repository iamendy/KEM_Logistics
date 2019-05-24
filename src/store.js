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
        secret: 'FLWSECK_TEST-d60af79fbfe92041372aebda9dffadff-X',
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
                    console.log(err);
                    dispatch('notification/add', notification);
                    throw err;
                })
        }
    }
})
