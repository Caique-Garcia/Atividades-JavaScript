

var numeroInteiro = -7

var numeroFracionado = 10.75

var texto = 'Curso de JavaScript ' + numeroInteiro + ' texto atoa'

var teste = true

document.write (texto)

console.log (numeroInteiro)

var a = 10

var b = 20 

var c = null

document.write('<h1>' + a +'</h1>')

document.write('<h1>' + b +'</h1>')

document.write('<h1>' + c +'</h1>')

c = a 

a = b

b = c 

c = null

document.write('<h1>' + a +'</h1>')

document.write('<h1>' + b +'</h1>')

var media = 7
var nota = prompt('Digite a nota do aluno: ')

if (nota>=media) {
	document.write('<h1>O aluno foi aprovado!</h1>')
} else {
	document.write('<h1>O aluno foi reprovado.</h1>')
}

var variavel1 = prompt('Digite algum número: ')
var variavel2 = prompt('Digite outro número: ')

variavel1 = parseInt(variavel1)
variavel2 = parseFloat(variavel2)

console.log(variavel1)
console.log(variavel2)

document.write(variavel1 + variavel2)



