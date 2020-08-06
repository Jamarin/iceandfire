import Vue from 'vue';
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'iceandfire',
    storage: window.localStorage,
});

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        searchTerm: '',
        charactersList: [],
        avoidSpoilers: true,
    },
    mutations: {
        updateSearchTerm (type, payload) {
            this.state.searchTerm = payload.searchTerm;
        },
        updateCharactersList (type, payload) {
            this.state.charactersList = payload.charactersList;
        },
        updateAvoidSpoilers (type, payload) {
            this.state.avoidSpoilers = payload.avoidSpoilers;
        }
    },
    getters: {
        getSearchTerm: state => {
            return state.searchTerm;
        },
        getCharactersList: state => {
            return state.charactersList;
        },
        getAvoidSpoilers: state => {
            return state.avoidSpoilers;
        }
    }
})