/*Declarando array*/
var lista_frutas = Array()

/*Add elementos no array*/
lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'

/*Add no final do array */
lista_frutas.push('Uva')

/*Add no começo do array */
lista_frutas.unshift('Morango')

/*Excluir elemento no final do array*/
lista_frutas.pop()

/*Excluir elemento no começo do array*/
lista_frutas.shift()

console.log(lista_frutas)