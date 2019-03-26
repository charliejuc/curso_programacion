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


module.exports = {
	// random_value: random_value
	random_value,
	randomPokemon
}