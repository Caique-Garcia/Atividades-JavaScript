//Objeto Literal
let a1 = {
	cor: 'Branco',
	modelo: 'Airbus a380',
	levantarVoo: function() {console.log(`Avião decolando!`)}
}

//Função construtora
let AviaoF = function(){
	this.cor = 'Azul',
	this.modelo = 'Boeing 787',
	this.levantarVoo = function() {console.log(`Avião decolando!`)}
}

let a2 = new AviaoF()

//Objeto usando class
class AviaoC {
	constructor(){
		this.cor = 'Vermelho',
		this.modelo = 'Embraer E-Jets'
		}

	levantarVoo(){
		console.log(`Avião decolando!`)
	}
}

let a3 = new AviaoC()


console.log(a1)
console.log(a2)
console.log(a3)

Object.prototype.attr50 = 'z' // afeta toda a aplicação com esse recurso

let animal = {attr1: 'a'}
let vertebrado = {__proto__:animal, attr2: 'b'}
let ave = {__proto__:vertebrado, attr3: 'c'}

console.log(ave.attr2, ave.attr1, ave.attr50)