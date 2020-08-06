<template>
	<div id="cards-root">
		<Character v-for="(character, index) in charactersListFiltered" :key="index" :characterData="character"/>
	</div>
</template>

<script>
import api from '../backend-api'
import Character from './Character'
import {mapGetters} from "vuex";

export default {
	name: 'CharacterList',
	components: {
		Character
	},
	data() {
		return {
			charactersList: [],
			loading: true
		}
	},
	computed: {
		...mapGetters(["getCharactersList", "getSearchTerm"]),
		charactersListFiltered: function () {
			if (this.getSearchTerm !== "") {
				return this.charactersList.filter((character) => (character.name.toLowerCase().includes(this.getSearchTerm.toLowerCase())));
			} else {
				return this.charactersList;
			}
		}
	},
	created() {
		this.fetchCharactersData();
	},
	methods: {
		fetchCharactersData() {
			this.loading = true;
			if (this.getCharactersList.length === 0) {
				api.getAllCharacters()
						.then(response => {
							this.charactersList = response.data.map((character) => {
								if (character != null) {
									return {
										name: character.name,
										image: character.image,
										gender: character.gender,
										titles: character.titles,
										culture: character.culture,
										religion: character.religion,
										alive: character.alive,
										house: character.house,
										actor: character.actor,
										age: (character.age !== null) ? character.age.age : 'undefined',
									};
								}
							});
							this.$store.commit("updateCharactersList", {charactersList: this.charactersList});
						})
						.catch(err => {
							console.error(err);
						})
						.finally(() => {
							this.loading = false;

						});
			} else {
				console.log('Obtained from cache');
				this.charactersList = this.getCharactersList;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cards-root {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
}
</style>
