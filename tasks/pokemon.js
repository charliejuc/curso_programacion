// +Solo un pokemon golpea en cada vuelta del ciclo
// +Cuando un pokemon golpea es posible que se haga daño a si mismo
// +Sacar del ciclo del combate todo lo que no sea propiamente el combate
// La función battle retorna la cantidad de empates, el daño total recibido y el nº de críticos
// para hacer console.log fuera de la función
// Probabilidad de fallar un ataque

const helpers = require('./utils/helpers')
const random_value = helpers.random_value
const randomPokemon	= helpers.randomPokemon
const battle = helpers.battle

console.log('* * * * * I N I C I A N D O * * * * *')

let ganadores = []

const maxTimes = 3

for (let times = 0; times < maxTimes; times++) {

	let pokemon1 = randomPokemon()
	let pokemon2 = randomPokemon()

	let empates_posibles = 2

	console.log(pokemon1)
	console.log(pokemon2)
	
	let pokemons = battle(pokemon1, pokemon2) 

	let ganador

	if (pokemons[0].hp > 0) {
		ganador = pokemon1
		console.log('Datos restantes del ganador:', ganador)
	} else if (pokemons[1].hp > 0) {
		ganador = pokemon2
		console.log('Datos restantes del ganador:', ganador)
	} 

	if (ganador){
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

for ( ganador of ganadores ) {
	ganadores_names.push(ganador.name)
}

// let i

// for ( i in ganadores ) {
// 	console.log(i, ganadores[i])
// 	ganadores_names.push(ganadores[i].name)
// }

console.log('¡¡LOS GANADORES DE LOS COMBATES FUERON:', ganadores_names.join(','), '!!')
console.log('¡¡Y POR LO DEMÁS CERRANDO EL CHIRINGUITO QUE VIENEN LAS POLISSIAS Y LOS POLISSIAS!!')
console.log ('Pero qué correcto eres my lord...')