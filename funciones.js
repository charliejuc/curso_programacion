'use strict'

// function add_is_strange (x, y) {
// 	const p = 34
// 	return x + y * 34
// }

// let i = 100

// while ( true ) {
// 	if ( random_value(1, 60) === 60 ) {
// 		console.log('El 60 ha llegado')
// 		break
// 	}
// }

// const helpers = require('./tasks/utils/helpers')
// const random_value = helpers.random_value

let i = 0

function recursive (i) {
	console.log(i)
	i++

	if ( i >= 1000 ) {
		return
	}

	recursive(i)
}

function factorial (n, mult) {
	console.log(n, mult)
	const new_n = n - 1

	if ( ! new_n ) {
		console.log('RETURN VALUE')
		return mult
	}

	if ( ! mult ) {
		mult = n
	}

	mult = mult * new_n

	console.log('RUN FUNCTION')
	return factorial(new_n, mult)
	console.log('RETURN FUNCTION')
}

let f = factorial(5)

console.log(f)

// function f() {
// 	return 1
// }

// f() => f() => f() => f()