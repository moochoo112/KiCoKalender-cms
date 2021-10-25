import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: null,
        user : null
    },
    getters: {
        isAuthenticated(state) {
            return state.token != null;
        }
    },
    mutations: {
        authUser(state, userData) {
            state.token = userData
        },
        newUser(state, userData) {
            state.user = userData
        },
        emptyUser(state) {
            state.user = null
        }
    },
    actions: {
        login({ commit }, authData) {
            axios
                .post("/api/login", {
                    email: authData.email,
                    password: authData.password,
                })
                .then((res) => {
                    commit('authUser', res.data.accessToken);
                    axios.defaults.headers.common['Authorization'] = "Bearer "  + res.data.accessToken;
                    localStorage.token = res.data.accessToken;
                })
                .catch((error) => (console.log(error), authData.error = "User not found"));
        },
        SearchUser({ commit }, email) {
            axios
                .get("api/user/FindUser", {
                    params: {
                        email: email.Email
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    commit('newUser', res.data);
                })
                .catch((error) => (console.log(error),commit('emptyUser'), email.error = "Email not found") );
        }
    }

});