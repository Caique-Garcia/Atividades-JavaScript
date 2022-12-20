
var listaNomes = Array()

listaNomes[0] = 'Caique'
listaNomes[1] = 'Caio'
listaNomes[2] = 'Rafael'
listaNomes[3] = 'Lucas'
listaNomes[4] = 'Tales'
listaNomes[5] = 'Danilo' 
listaNomes[6] = 'Rafaela'

console.log(listaNomes)

/*Declarando variavel com a função que vai ser usada 
no forEach*/
var c = function(valor,indice,array){
	document.write('Codigo: ' + indice + ' Cliente: '+ array[indice] + '<br />')
}

/*é precisa passar com paramentro para o forEach
uma função que tenha os seguintes parametros
funcion(valor, indice,array) nessa ordem não
importando os nomes das variaveis mas sim a ordem*/
listaNomes.forEach(c)

document.write('<br />')

/*operador in seguido do array faz com que o for
percorra todo o array*/
for(var i in listaNomes){
	document.write('Codigo: ' + i + ' Cliente: '+ listaNomes[i] + '<br />')
}

document.write('<br />')
i = 0

/*'.lenght no final do nome do array traz o tamanho
do mesmo'*/
while (i < listaNomes.length) {
	document.write('Codigo: ' + i + ' Cliente: '+ listaNomes[i] + '<br />')
	i++
}

document.write('<br />')

i = 1
var j = 1

while (i <= 10) {

	j = 1

	while (j <= 10){
		document.write(i + ' x ' + j + ' = '+ (i*j) + '<br />')
		j++
	}

	document.write('<br />')
	i++
}