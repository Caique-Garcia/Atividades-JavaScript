
var listaNomes = Array()

listaNomes[0] = 'Caique'
listaNomes[1] = 'Caio'
listaNomes[2] = 'Rafael'
listaNomes[3] = 'Lucas'
listaNomes[4] = 'Tales'
listaNomes[5] = 'Danilo' 
listaNomes[6] = 'Rafaela'

console.log(listaNomes)

for(var i in listaNomes){
	document.write('Codigo: ' + i + ' Cliente: '+ listaNomes[i] + '<br />')
}

document.write('<br />')
i = 0

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