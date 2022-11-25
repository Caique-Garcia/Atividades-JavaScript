

/*var numeroInteiro = -7

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
var faltas = prompt('Digite a quantidade de faltas: ')
var faltas_max = 15


if (nota>=media && faltas <= faltas_max) {
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


var idade = prompt('Digite sua idade: ')

if (idade>=0 && idade<15){
	document.write('<h1>Criança</h1>')
}else if(idade>=15 && idade<30){
	document.write('<h1>Jovem</h1>')
}else if(idade>=30 && idade<60){
	document.write('<h1>Adulto</h1>')
}else if(idade>=60){
	document.write('<h1>Idoso</h1>')
}*/

var nome = prompt('Digite o nome da pessoa: ')
var altura = prompt('Digite a altura da pessoa em centímetros: ')
var peso = prompt('Digite o peso da pessoa: ')

altura = parseFloat(altura)/100
peso = parseFloat(peso)

var m = peso / (altura*altura)

m = parseInt(m)

if(m < 16) {
	var classificacao ='Baixo peso muito grave.'

}else if(m>=16 && m<17){
	var classificacao ='Baixo peso grave.'

}else if(m>=17 && m<18.5){
	var classificacao ='Baixo peso.</h1>'

}else if(m>=18.5 && m<25){
	var classificacao ='Peso normal.'

}else if(m>=15 && m<30){
	var classificacao ='Sobrepeso'

}else if(m>=30 && m<35){
	var classificacao ='Obesidade Grau I.'

}else if(m>=35 && m<40){
	var classificacao ='Obesidade Grau II.'

}else if(m>=40){
	var classificacao ='Obesidade Grau III.'

}

document.write(nome + ' possui o índice de massa corporal igual a ' + m + ' sendo clessificado como: ' + classificacao)





