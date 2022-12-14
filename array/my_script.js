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

/*indexof() traz o indice do elemento no array*/
/*retorna valor -1 quando elemento não existe no array*/
console.log(lista_frutas.indexOf('Maçã'))

/*Ordena o array de forma alfanumérica*/
console.log(lista_frutas.sort())


var lista_numeros = Array()

lista_numeros[0] = 17
lista_numeros[1] = 10
lista_numeros[2] = 1
lista_numeros[3] = 8
lista_numeros[4] = 40
lista_numeros[5] = 11
lista_numeros[6] = 2

/*Para ordenar lista de numeros é nesserio add uma função de parametro no metodo sort()*/
console.log(lista_numeros.sort(ordenaNum))

/*função de parametro para ordernar numeros*/
function ordenaNum(a,b) {
	return a - b
}
