// new Array()
// []

let a = new Array()
let b = ['Hola', 'Juanola', 'Ricola', 'unaola', 'motorola2342342']

console.log(a)
console.log(b)

console.log('Key 2:', b[2])

// for ( let k in b ) {
// 	console.log('K:', k)
// 	console.log('E:', b[k])
// }

// for ( let e of b ) {
// 	console.log('E:', e)
// }

// Array.length

console.log('b Length:', b.length)

let b_length = b.length

// while (--b_length) {
// 	console.log(b[b_length])
// }

// for(definir variable; condicional; incrementar o disminuir)
// for ( let i = 0; i < b_length; i++ ) {
// 	console.log(b[i])
// }

let ba = [b, [1,2,3,4]]

console.log(ba)
console.log(ba[0])
console.log(ba[0][2])

console.log(ba[1])
console.log(ba[1][1])

ba[0][0] = 'Laliao'


console.log(b)
console.log(ba)

b.push('Hey')

console.log(b)