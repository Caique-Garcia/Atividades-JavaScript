/*Variavel que vai receber a abertura da janela*/
var janela


/*Função para abrir uma janela*/
function abrirPopUp() {
	/*abrindo a janela e declarando a janela como uma variavel pra ser utilizada novamente*/
	janela = window.open('http://www.google.com','nova_janela','wdith=200, heinght=100')

}

/*Função parar fechar janela*/
function fecharPopUp() {
	/*Recuperando a janela a pratir da variavel e fechando*/
	janela.close()

}

/*Recuperando altura e largura potencial da area do navegado*/
var altura = window.screen.availHeight
var largura = window.screen.availWidth

/*Exibindo altura e largura potencial da area do navegado*/
document.write('A altura do navegador é: ' + altura + '<br />')
document.write('A largura do navegador é: ' + largura + '<br />')


var i = 5

/*delimita um intervalo para acionar uma determinada função
setTimeout ativa a função uma unica vez depois de decorrido 
o tempo delimitado*/
var x = setInterval(function() {
	/*Fução para escrever o valor de i e decrementar 1 
	a cada 1 segundo(1000 milesegundos)*/
	document.write(i + '<br />')
	i -= 1
	if(i==0){
		/*Recarrega  a pagina quando i for igual a zero*/
		/*window.location.reload()*/

		/*Limpa o intervalo de tempo da função recuperada 
		pela variavel*/
		clearInterval(x)

	}
},1000)