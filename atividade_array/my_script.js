
/*Criando array*/
var lista_objetos = Array()

function adicionar() {
	/*Recebendo o valor digitado no campo*/
	var objeto = document.getElementById('objeto').value

	/*Limpa o campo*/
	document.getElementById('objeto').value = ''
	console.log(objeto)

	/*Verificar se o campo é vazio ou preenchido*/
	if(objeto == ''){
		alert('Informe um valor válido')
	}else {
		/*Verificar se já existe no array*/
		var aux = lista_objetos.indexOf(objeto)
		if(aux === -1){
			/*Add objeto caso não exista*/
			lista_objetos.push(objeto)
			console.log(lista_objetos)
			console.log(typeof(lista_objetos))

		}else{
			/*Exibir mensagem caso o objeto já esxista*/
			alert('Objeto já foi adicionado!')
		}
	}
}

function ordenar() {
	/*Ordenar array*/	
	console.log(lista_objetos.sort())
}

