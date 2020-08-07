<template>
    <div id="card" :class="(!this.getAvoidSpoilers) ? (characterData.alive) ? 'alive' : 'dead' : ''" @click="showDetailInfo(characterData)">
        <h1 class="title">{{ characterData.name }}</h1>
        <div class="image"><img :src="characterData.image" :alt="characterData.name"></div>
        <div class="data">
            <p><b>{{ characterData.house }}</b></p>
        </div>
        <DetailInfo :characterData="characterData" v-if="showDetail"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Character',
        props: ['characterData'],
        data: function () {
            return {
                showDetail: false,
            }
        },
        computed: {
            ...mapGetters(["getAvoidSpoilers", "getSelectedCharacter"]),
        },
        methods: {
            showDetailInfo(characterData) {
                if(this.getSelectedCharacter != null) {
                    if(this.getSelectedCharacter.name !== characterData.name) {
                        this.$store.commit("updateSelectedCharacter", { selectedCharacter: characterData });
                        console.log("Exists and is different");
                    } else {
                        this.$store.commit("updateSelectedCharacter", { selectedCharacter: null });
                        console.log("Exists and is the same");
                    }
                } else {
                    this.$store.commit("updateSelectedCharacter", { selectedCharacter: characterData });
                    console.log("Not exists");
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
