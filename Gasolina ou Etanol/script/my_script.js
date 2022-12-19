function calcular() {
	/*Receber valores de entradas*/
	var preco_gasolina = document.getElementById('gasolina_preco').value.replace(",",".")
	var preco_etanol = document.getElementById('etanol_preco').value.replace(",",".")

	/*console.log(preco_gasolina)
	console.log(preco_etanol)*/

	/*Limpar os campos*/
	document.getElementById("gasolina_preco").value = ''
	document.getElementById("etanol_preco").value = ''


	if(preco_gasolina != '' && preco_etanol != ''){
		/*Transformando valor recebido em numero*/
		preco_gasolina = parseFloat(preco_gasolina)
		preco_etanol = parseFloat(preco_etanol)

		/*console.log(preco_gasolina)
		console.log(preco_etanol)*/


		/*Executar calculo*/
		var aux = (preco_etanol/preco_gasolina)*10

		console.log(aux)

		/*De acordo com resultado exibir a resposta*/
		if(aux>7){
			/*Tornar resultado visivel*/
			document.getElementById('gasolina').style.visibility = 'visible'

		}else {
			/*Tornar resultado visivel*/
			document.getElementById('etanol').style.visibility = 'visible'
		}
	} else {
		alert("Por favor digite um valor!")
	}

}

function voltar() {
	/*Voltar pra tela inicial*/
	document.getElementById('gasolina').style.visibility = 'hidden'
	document.getElementById('etanol').style.visibility = 'hidden'
	
	
}