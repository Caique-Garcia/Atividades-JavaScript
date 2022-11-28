
function exibirArtigo(id,callbackSucesso,callbackErro) {
	if (true) {
		callbackSucesso('Funções de callback em JS','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna ex, elementum non sem maximus, pretium tempus odio.')
	} else {
		callbackErro('Erro ao recuperar dados')
	}

}

var callbackSucesso = function(titulo,descricao){
	document.write('<h1>' + titulo + '</h1>')
	document.write('<hr />')
	document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro){
	document.write('<p><b>Erro: </b>' + erro + '</p>')
}

exibirArtigo(1,callbackSucesso,callbackErro)