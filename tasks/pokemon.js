// Function battle([array]pokemons)
// battle( [ pokemon1, pokemon2 ] )
// En caso de empate se vuelve a ejecutar la batalla con los MISMOS pokemon
// Function battleContinue que será usada para determinar si el combate continúa
// OPCIONAL: Añadir ataques críticos con una probabilidad.

const helpers = require('./utils/helpers')
const random_value = helpers.random_value
const randomPokemon	= helpers.randomPokemon

console.log('* * * * * I N I C I A N D O * * * * *')

let ganadores = []


const hpRange =  51
const damageRange = 41
const maxTimes = 3

for (let times = 0; times < maxTimes; times++) {

	let pokemon1 = randomPokemon()
	let pokemon2 = randomPokemon()

	console.log(pokemon1)
	console.log(pokemon2)


	//porque al colocar || hago un bucle infinito si enteoría seria un valor falsy, es más incluso sigue 
	//ocurriendo si lo colocas en (pokemon1.hp > 0 || pokemon2.hp > 0) -- son entonces -X valores y solo cuenta el 0 para truthy o falsy
	
	// while (battleContinue(pokemons)) {
	while (pokemon1.hp > 0 && pokemon2.hp > 0) {	
		pokemon1.hp = pokemon1.hp - pokemon2.damage

		console.log(pokemon2.name, "infligió", pokemon2.damage, "puntos de daño a", pokemon1.name)
		console.log('A', pokemon1.name, 'le quedan', pokemon1.hp ,'puntos de vida')
		console.log(pokemon1.name, "infligió", pokemon1.damage, "puntos de daño a", pokemon2.name)
		console.log('A', pokemon2.name, 'le quedan', pokemon2.hp = pokemon2.hp - pokemon1.damage,'puntos de vida')

	}

	let ganador

	//por que al crear let ganador=[pokemon1] dentro de la condicional después no era capaz de ejecutarla más adelante donde 'Datos del gandor'
	// fuera de la condicional

	if (pokemon1.hp > 0) {
		ganador = pokemon1
		console.log('Datos restantes del ganador:', ganador)
	} else if (pokemon2.hp > 0) {
		ganador = pokemon2
		console.log('Datos restantes del ganador:', ganador)
	} else {
		console.log('Ha sido empate')
	}

	if ( ganador ) {
		ganadores.push(ganador)
	}

	console.log('No nos hacemos cargo de posibles berrinches por parte de la(s) mascota(s) perdedora(s). Gracias por sus apuestas y por hacernos ricos:',
		'¡Viva el capitolio!')

	if ( times === maxTimes - 1 ) {
		continue
	}
	console.log('¡¡¡SIGUIENTE PELEA WOHOOOOOOOOOOOO!!!')

}

let ganadores_names = []
let ganador

console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

for ( ganador of ganadores ) {
	console.log(ganador)
	ganadores_names.push(ganador.name)
}

// let i

// for ( i in ganadores ) {
// 	console.log(i, ganadores[i])
// 	ganadores_names.push(ganadores[i].name)
// }


console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

console.log('¡¡LOS GANADORES DE LOS COMBATES FUERON:', ganadores_names.join(','), '!!')
console.log('¡¡Y POR LO DEMÁS CERRANDO EL CHIRINGUITO QUE VIENEN LAS POLISSIAS Y LOS POLISSIAS!!')
console.log ('Pero qué correcto eres my lord...')