function random_value(min, max, sum=0) {
	if ( ! max ) {
		max = min
		min = 0
	}

	let r_value = Math.random() * ( max - min + sum ) + min

	return parseInt(r_value)
}

let nombres = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ', 'KKK']

function randomPokemon () {
	let pokemon = {
		name: nombres[random_value(nombres.length)],
		hp: random_value(50,100,1),
		damage: random_value(10,50,1)
	}
	return pokemon
}

function chance(percentage, multiplier){
	// Los porcentajes van entre 0 y 100 siendo estos números enteros. Si se quisiese añadir el 0 habría que cambiar el 1
	// inicial de random_value por 0, pero sería 1 número más en la probabilidad, puesto que el 0 cuenta.
	if(random_value(1,100,1) <= percentage){
		return multiplier
	} else {
		return 1
	}
}

function reverseBi (bi) {
	if ( ! bi ) {
		return 1
	}

	return 0
}

function battleContinue (pokemons) {
	for ( let pokemon of pokemons ) {
		if ( pokemon.hp <= 0 ) {
			return false
		}
	}

	return true
}

function empate(pokemons){
	
	let counter = 0

	for (let pokemon of pokemons){
		if (pokemon.hp <= 0) counter++  
	}

	return counter === pokemons.length	
}

function battle (pokemon1, pokemon2){
	
	// Guardar una copia de los pokemons inciales por si hay empate poder reiniciarlos
	let copy_pokemon1 = Object.assign({}, pokemon1)
	let copy_pokemon2 = Object.assign({}, pokemon2)
	let pokemons = [copy_pokemon1,copy_pokemon2]
	let bi = 0

	while ( battleContinue(pokemons) ) {
		let rbi = reverseBi(bi)

		let at = pokemons[bi]
		let df = pokemons[rbi]
		let criticmultiplier = chance(30,1.7)
		let self_damage_chance = chance(30,0.5)
		let self_damage = parseInt(at.damage * self_damage_chance)
		let final_damage = parseInt(at.damage * criticmultiplier)

		df.hp -= final_damage 
		at.hp -= self_damage_chance === 1 ? 0 : self_damage

	// **DESCRIPCIÓN TEXTUAL**
		console.log(`${at.name} infligió ${final_damage} puntos de daño a ${df.name}`)
		if (criticmultiplier !== 1) console.log('¡Fue un golpe crítico!')
		console.log(`A ${df.name} le quedan ${df.hp} puntos de vida`)
		if (self_damage_chance !== 1) console.log(`${at.name} se hirió a sí mismo ${self_damage}`)


		console.log('ATTACKER', at)
		console.log('DEFENSOR', df)

		bi = rbi
	}

	if (empate(pokemons)) console.log('************Hubo empate') 
	return pokemons
}

module.exports = {
	// random_value: random_value
	random_value,
	randomPokemon,
	battle
}