<template>
    <div class="base">
        <div class="logo">
            <img src="./../assets/logo.png" alt="Logo">
        </div>
        <div class="searchBar">
            <label for="name">Search characters by name</label>
            <input id="name" type="text" v-model="searchText" @keyup="onSearchTextUpdated">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        data () {
            return {
                searchText: ''
            }
        },
        methods: {
            onSearchTextUpdated() {
                let trimmedSearchText = this.searchText.trim();
                if(trimmedSearchText.length >= 3) {
                    this.$store.commit('updateSearchTerm', {"searchTerm": trimmedSearchText});
                }
                if(trimmedSearchText.length === 0) {
                    if(this.$store.getters.getSearchTerm !== "") {
                        this.$store.commit('updateSearchTerm', { "searchTerm": trimmedSearchText });
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.base {
        margin: 30px 0;
        text-align: center;
    }

    .logo img {
        max-width: 300px;
    }

    label {
        display: block;
        font-size: 20px;
        text-align: left;
    }

    input {
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        font-size: 20px;
    }
</style>
