
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMoscaTempo = 1500

/*Recuperando nivel selecionado*/
/*search recupera o valor a direta do ponto de interrogação com o ponto*/
var nivel = window.location.search
/*Substitui da string recuperada o primeiro carcter pelo segundo*/
nivel = nivel.replace('?','')


/*Mudando nivel do jogo de acor com tempo de criação da mosca*/
if(nivel === 'normal'){
	criaMoscaTempo = 1500

}else if(nivel === 'dificil'){
	criaMoscaTempo = 1000

}else if(nivel === 'batman'){
	criaMoscaTempo = 750

}

function ajustaTamanhoPalco() {

	/*Encontrando largura e altura da pagina*/
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalco()

/*Função cronometro do jogo*/
var cronometro = setInterval(function () {
	/*A cada 1 segundo(1000 milisegundos) vai decrementar 1*/
	tempo -= 1

	/*Veridicando se o tempo acabou*/
	if(tempo < 0){

		/*Zerando cronometro*/
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'

	}else {

		/*Alterando valor contidos entre as tags do elemento HTML*/
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)

function posicaoRandomica() {

	/*Remover a mosca(elemento) anterior caso exista*/
	/*Se o elemento selecionado existir sera retornado
	true caso não exista sera retornado false*/
	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		/*Cerificando se ainda a vidas para o jogador*/
		/*variavel vidas represento o numero de vidas perdidas*/
		if(vidas>3){

			/*Ao fim do jogo redirecionar pra outra pagina*/
			window.location.href = 'fim_de_jogo.html'

		}else {

			/*Alterar pontos de vida caso elemento for removido*/
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			/*Passando para proxima vida quando perder uma*/
			vidas++
		}
	}
	
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
	mosca.className = tamanhoRandom() + ' ' + ladoRandom()

	/*Posicionando o elemento*/
	mosca.style.position = 'absolute'
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'

	/*inserindo Id no elemento*/
	mosca.id = 'mosca'

	/*Adicionando evento(onclick) no elemento*/
	mosca.onclick = function () {
		/*remove o elemento após o click*/
		/*operado this indica que o elemento selecionado
		é o mesmo que executa a função*/
		this.remove()
	}

	/*Adicionando elemento a um outro elemnto e=xistente na pagina(body)*/
	document.body.appendChild(mosca)	

	
}

/*Gerando o elemnto a cada 1 segundo (1000 milisegundos)*/
var criaMosca =	setInterval(function () {
	posicaoRandomica()
},criaMoscaTempo)

/*Função para alterar tamando do elemento de forma aleatória*/
function tamanhoRandom() {
	/*valor aleatório entre 1, 2 e 3*/
	var classe = Math.floor(Math.random() * 3)

	/*Estrutura de decisação de acordo com o valor da classe*/
	switch(classe){

		case 0:
			return 'mosca1'

		case 1:
			return 'mosca2'

		case 2:	
			return 'mosca3'
	}
}

/*Função para decidir aleatóriamento pra que lado a mosca estara virada*/
function ladoRandom() {
	
	var classe = Math.floor(Math.random() * 2)
	switch(classe){

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'

	}

}

