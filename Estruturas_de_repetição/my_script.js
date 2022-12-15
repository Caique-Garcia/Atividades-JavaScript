
var x = 1

/*Fica no laço de repetição enquanto a condição for true*/
while(x <= 10){
	document.write(x + '<br />')
	x++
	/*Sai do laço de repetição quando encontra o comando break ou a condição for false*/
	if(x === 5){
		break
	}
}

do{

 /*Código a ser executado*/
 document.write(x + '<br />')
 x++

}while(x <= 10)/*Verificação da condição*/



for(var i = 10; i >= 0; i--){
 	 /*Código a ser executado*/
 	document.write(i + '<br />') 	

 }
