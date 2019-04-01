//npm init (solo la primera vez si no hay package.json)
//npm install <nombre_modulo> --save

const argv = require('minimist')(process.argv.slice(2))

console.log(argv)