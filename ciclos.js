// for(definir variable; condicional; incrementar o disminuir)
// while

// for (let i = 10; i; i--) {
// 	console.log('I:', i)
// }

// let i = 10

// while (i) {
// 	console.log('I:', i)
// 	i--
// }

// for ( let k in b ) {
// 	console.log('K:', k)
// 	console.log('E:', b[k])
// }

// for ( let e of b ) {
// 	console.log('E:', e)
// }


let a = {
	hp: 100,
	damage: 20
}

let b = {
	hp: 100,
	damage: 30
}

let pokemons = [
	a, b
]
let bi = 0

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

while ( battleContinue(pokemons) ) {
	let rbi = reverseBi(bi)

	let at = pokemons[bi]
	let df = pokemons[rbi]

	df.hp -= at.damage

	console.log('ATTACKER', at)
	console.log('DEFENSOR', df)

	bi = rbi
}

if ( a.hp ) {
	console.log('A is the winner!!')
} else {
	console.log('B is the winner!!')
}