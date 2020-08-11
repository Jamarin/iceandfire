<template>
    <b-modal id="modal-card" :title="characterData.name" :class="(!this.getAvoidSpoilers) ? (characterData.alive) ? 'alive' : 'dead' : ''">
        <h1 class="title">{{ characterData.name }}</h1>
        <div class="image"><img :src="characterData.image" :alt="characterData.name"></div>
        <div class="data">
            <p><b>Age:</b> {{ characterData.age || '-' }}</p>
            <p><b>Gender:</b> {{ characterData.gender }}</p>
            <p><b>{{ characterData.house }}</b></p>
        </div>
    </b-modal>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'DetailInfo',
        props: ["characterData"],
        computed: {
            ...mapGetters(["getAvoidSpoilers"]),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    dialog {
        position: absolute;
        top: 25%;
        left: 25%;
    }

    #card {
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    #card.alive {
        background-color: #77DD77;
    }

    #card.dead {
        background-color: #FF6962;
    }

    #card > h1.title {
        font-size: 1.5rem;
        text-align: center;
    }

    #card > .image {
        width: 100%;
        max-height: 300px;
        overflow: hidden;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    #card > .image > img {
        width: 100%;
    }

    #card > .data {
        padding: 5px 20px;
    }
</style>
