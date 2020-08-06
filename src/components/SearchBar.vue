<template>
    <div class="base">
        <div class="logo">
            <img src="./../assets/logo.png" alt="Logo">
        </div>
        <div><button @click="toggleFilters">Toggle filters</button></div>
        <div class="search" v-show="showFilters">
            <div class="item-form">
                <label for="name">Search characters by name</label>
                <input id="name" type="text" v-model="searchText" @keyup="onSearchTextUpdated">
            </div>
            <div class="item-form">
                <label for="avoidSpoilers" class="container">Avoid spoilers?
                    <input id="avoidSpoilers" type="checkbox" v-model="avoidSpoilers" @change="onAvoidSpoilersUpdated">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        data () {
            return {
                searchText: '',
                avoidSpoilers: true,
                showFilters: false,
            }
        },
        methods: {
            toggleFilters() {
                this.showFilters = !this.showFilters;
            },
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
            },
            onAvoidSpoilersUpdated() {
                this.$store.commit('updateAvoidSpoilers', { "avoidSpoilers": this.avoidSpoilers });
            }
        }
    }
</script>

<style scoped>
    div.base {
        margin: 30px 0;
        text-align: center;
    }

    .logo img {
        max-width: 300px;
    }

    .search {
        display: grid;
        grid-template-columns: 2fr 1fr;
        border: 1px solid black;
        padding: 10px;
        margin-top: 10px;
    }

    label {
        display: block;
        font-size: 20px;
        text-align: left;
    }

    label.container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-left: 50px;
        margin-top: 30px;
    }

    label.container > input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    input[type="text"] {
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        font-size: 20px;
    }

    input[type="checkbox"] {
        display: inline-block;
    }
</style>
