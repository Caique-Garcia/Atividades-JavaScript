var numero1 = prompt('Digite um numero: ')
numero1 = parseInt(numero1)

var operacao = prompt('Digite a operação que deseja realizar: ')


var numero2 = prompt('Digite mais im numero: ')
numero2 = parseInt(numero2)

operacao = operacao.trim()
operacao = operacao.toLowerCase()

function soma(numero1,numero2) {
	var res = numero1 + numero2
	return res
}

function subtracao(numero1,numero2) {
	var res = numero1 - numero2
	return res
}

function calculo(numero1,numero2,operacao){
	if(operacao == 'soma'){
		var resultado = soma(numero1,numero2)

	}else if(operacao == 'subtracao'){
		var resultado = subtracao(numero1,numero2)

	}	
	document.write('O resultado é: ' + resultado)
}

calculo(numero1,numero2,operacao)

