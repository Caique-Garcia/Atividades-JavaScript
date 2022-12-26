
var altura = 0
var largura = 0

function ajustaTamanhoPalco() {

	/*Encontrando largura e altura da pagina*/
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalco()

function posicaoRandomica() {
	
	/*Criando variavel posição com valores randomicos*/
	/*Limitando o tamanho para a altura e largura da pagina*/
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	/*controle pra posição não ser menor que zero*/
	/*Posição é menor que zero? 
	se for recebe zero
	se não recebe ela mesma*/
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	/*Criando elemento html*/
	var mosca = document.createElement('img')

	/*Adicionendo valor ao atributo do elemto*/
	/*colocando o caminho no src do element img*/
	mosca.src = 'imagens/mosca.png'

	/*Adicionando classe no elento*/
	mosca.className = 'mosca1'

	/*Posicionando o elemento*/
	mosca.style.position = 'absolute'
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'

	/*Adicionando elemento a um outro elemnto e=xistente na pagina(body)*/
	document.body.appendChild(mosca)	
}

posicaoRandomica()

