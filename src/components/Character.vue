<template>
    <div id="card">
        <div class="image"><img :src="characterData.image" :alt="characterData.name"></div>
        <div class="data">
            <p><b>Name:</b> {{ characterData.name }}</p>
            <p><b>Age:</b> {{ characterData.age }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Character',
        props: ['characterData'],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #card {
        border: 1px solid black;
        border-radius: 5px;
    }

    #card > .image {
        width: 100%;
        max-height: 300px;
        overflow: hidden;
    }

    #card > .image > img {
        width: 100%;
    }

    #card > .data {
        padding: 5px 20px;
    }
</style>
