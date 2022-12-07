function mudaCorDoFundo() {
	document.getElementById('name').style.backgroundColor = '#FFFF00'
}

function voltaCorDoFundo() {

	
	var nome = document.getElementById('name').value
	var tamanho = nome.length
	console.log(nome)
	console.log(tamanho)

	if(tamanho>=3){
		document.getElementById('name').style.backgroundColor = '#32CD32'
	}else{
		document.getElementById('name').style.backgroundColor = '#ff0000'
	}
}