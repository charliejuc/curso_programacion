'use strict'

// {}

// let a = {
// 	name: 'Ajak',
// 	x: 30
// }

// let b = {
// 	name: 'Ojak',
// 	x: 10
// }

// console.log(a)
// console.log(a['name'])
// console.log(a.x)

// console.log(a.x - b.x)

// const name = 'Ejika2'

// console.log({
// 	name
// })

//Object.assign({}, bar)

let bar = {
	name: 'hola',
	hp: 34,
	obj: {
		hp: 15
	}
}

let bor = {
	name: 'pito',
	otro: 1
}

console.log('BAR:', bar)
console.log('BOR:', bor)

let ber = Object.assign(bor, bar)

// console.log('BER:', ber)

// console.log('BAR:', bar)
// console.log('BOR:', bor)

ber.name = 'juan'

console.log('BAR:', bar)
console.log('BER:', ber)

ber.obj.hp = 30

console.log('BAR:', bar)
console.log('BER:', ber)

ber = JSON.parse(
	JSON.stringify(bar)
)

console.log(ber)

ber.obj.hp = 50

console.log('BAR:', bar)