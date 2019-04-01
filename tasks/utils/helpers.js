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

function critic_chance(percentage, multiplier){
	// Los porcentajes van entre 0 y 100 siendo estos números enteros. Si se quisiese añadir el 0 habría que cambiar el 1
	// inicial de random_value por 0, pero sería 1 número más en la probabilidad, puesto que el 0 cuenta.
	if(random_value(1,100,1) <= percentage){
		return multiplier
	} else {
		return 1
	}
}

function battle (pokemon1, pokemon2, empates_posibles){
	
	// Guardar una copia de los pokemons inciales por si hay empate poder reiniciarlos
	let copy_pokemon1 = Object.assign({}, pokemon1)
	let copy_pokemon2 = Object.assign({}, pokemon2)

	while (pokemon1.hp > 0 && pokemon2.hp > 0) {	

		let final_damage

	// **FÓRMULA MATEMÁTICA**	
		final_damage = parseInt(pokemon2.damage * critic_chance(30,1.7))
		pokemon1.hp = pokemon1.hp - final_damage
		
	// **DESCRIPCIÓN TEXTUAL**
		console.log(pokemon2.name, "infligió", final_damage, "puntos de daño a", pokemon1.name)
		if (final_damage !== pokemon2.damage){console.log('¡Fue un golpe crítico!')}
		console.log('A', pokemon1.name, 'le quedan', pokemon1.hp ,'puntos de vida')

	// **FÓRMULA MATEMÁTICA**	
		final_damage = parseInt(pokemon1.damage * critic_chance(30,1.7))
		pokemon2.hp = pokemon2.hp - final_damage

	// **DESCRIPCIÓN TEXTUAL**
		console.log(pokemon1.name, "infligió", final_damage, "puntos de daño a", pokemon2.name)
		if (final_damage !== pokemon1.damage){console.log('¡Fue un golpe crítico!')}
		console.log('A', pokemon2.name, 'le quedan', pokemon2.hp ,'puntos de vida')  

	// En caso de empate reiniciar
		//**Si tenemos que hacer Object.assign para crear otro lugar donde referenciarlo, por qué en esta seccion al igualar
		//**pokemon1 a copy_pokemon1 no estamos modificando el original (copy_pokemon1) al modificar pokemon1, como sí
		//**ocurría a la inversa
		if (empates_posibles > 0){
			if (pokemon1.hp <= 0 && pokemon2.hp <= 0){
			pokemon1 = copy_pokemon1
			pokemon2 = copy_pokemon2
			empates_posibles--
			console.log('*******************REPITEN COMBATE*******************')
			console.log(pokemon1)
			console.log(pokemon2)
			battle (pokemon1, pokemon2, empates_posibles)
			}
		} else {
			console.log('Estos dos no se ponen de acuerdo, así que saltamos al siguiente combate.')
		}
// ¡¡¡¡¡BUG!!!!: Cuando repiten no continuan con la secuencia de guardar los datos del ganador en pokemon.js
	}

	return 
}

module.exports = {
	// random_value: random_value
	random_value,
	randomPokemon,
	battle
}