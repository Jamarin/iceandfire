import axios from "axios";

const API = 'https://api.got.show/api';

const AXIOS = axios.create({
    baseURL: API,
    headers: {
        'X-Requested-With': 'XMLHttpRequested',
        'Access-Control-Allow-Origin': '*'
    }
});

export default {
    getAllCharacters() {
        return AXIOS.get(`/show/characters`);
    },
    getAllHouses() {
        return AXIOS.get(`/show/houses`);
    }
}