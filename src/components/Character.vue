<template>
    <div id="card" :class="(!this.getAvoidSpoilers) ? (characterData.alive) ? 'alive' : 'dead' : ''">
        <h1 class="title">{{ characterData.name }}</h1>
        <div class="image"><img :src="characterData.image" :alt="characterData.name"></div>
        <div class="data">
            <p><b>Age:</b> {{ characterData.age || '-' }}</p>
            <p><b>Gender:</b> {{ characterData.gender }}</p>
            <p><b>{{ characterData.house }}</b></p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Character',
        props: ['characterData'],
        computed: {
            ...mapGetters(["getAvoidSpoilers"]),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #card {
        border: 1px solid black;
        border-radius: 5px;
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
