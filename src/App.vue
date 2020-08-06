<template>
    <div id="app">
        <SearchBar/>
        <CharacterList/>
    </div>
</template>

<script>
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'

export default {
    name: 'App',
    components: {
        CharacterList,
        SearchBar
    }
}
</script>

<style>
#app {
    width: 95%;
    margin: 0 auto;
}
</style>
