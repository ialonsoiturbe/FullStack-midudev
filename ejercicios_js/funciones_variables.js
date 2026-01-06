/* Ejercicios para practicar conceptos
basicos de JavaScript */

//Funcion que saluda
function saludar() {
  console.log('¡Hola desde mi función!')
}

saludar()


//Calculadora de operaciones basicas
function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

console.log('Suma:', sumar(10, 5))
console.log('Resta:', restar(10, 5))
console.log('Multiplicación:', multiplicar(10, 5))


//Funciones con prompt
function pedirNombre() {
  let nombre = prompt('¿Cuál es tu nombre?')
  alert('¡Hola, ' + nombre + '!')
}

pedirNombre();