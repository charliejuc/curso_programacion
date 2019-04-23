// setTimeout(cb, ms)
// setInterval
// process.nextTick

// let a = () => {
// 	console.log('Me ejecuté!')
// }

// clearTimeout(setTimeout(a, 2000))
// clearTimeout(setTimeout(a, 2000))
// clearTimeout(setTimeout(a, 2000))
// clearTimeout(setTimeout(a, 2000))
// setTimeout(a, 2000)

// let a

// let tid = setTimeout(() => {
// 	console.log('Me ejecuté!')
// 	a = 3
// }, 2000)

// clearTimeout(tid)

// console.log(tid, a)

// let a = 0

// let tid = setInterval(() => {
// 	console.log(`Me ejecuté! ${a}`)
// 	++a

// 	if ( a >= 3 ) {
// 		clearInterval(tid)
// 	}
// }, 500)

// clearInterval(tid)

// process.nextTick(() => {
// 	console.log('A toa pastilla, salpicadero.')
// })

// console.log('Hola')

class A {
	hola() {
		console.log('Hola')
	}
}

class B extends A {

}

let b = new B()

b.hola()