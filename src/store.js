import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchTerm: '',
        charactersList: [],
    },
    mutations: {
        updateSearchTerm (type, payload) {
            this.state.searchTerm = payload.searchTerm;
        },
        updateCharactersList (type, payload) {
            this.state.charactersList = payload.charactersList;
        }
    },
    getters: {
        getSearchTerm: state => {
            return state.searchTerm;
        },
        getCharactersList: state => {
            return state.charactersList;
        }
    }
})