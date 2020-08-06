<template>
    <footer>
        <p>Made with <span class="hearth">❤</span> with VueJS by <a href="https://github.com/Jamarin/iceandfire">Jamarin</a></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    p {
        text-align: center;
    }

    p > span.hearth {
        color: #FF6962;
    }
</style>
