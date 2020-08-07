<template>
    <div id="app">
        <SearchBar/>
        <CharacterList/>
        <Footer/>
    </div>
</template>

<script>
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'
import Footer from "@/components/Footer";

export default {
    name: 'App',
    components: {
        CharacterList,
        SearchBar,
        Footer
    }
}
</script>

<style>
    body {
        background-color: #eee;
    }
#app {
    width: 95%;
    margin: 0 auto;
}
</style>
