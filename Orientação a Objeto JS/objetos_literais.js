
let nome = 'Caique'
let idade = '29'
let sexo = 'Masculino'
let profissao = 'Analista de suporte'

/*Criando objeto literal*/
let objeto = {
	nome: nome,
	idade: idade,
	sexo: sexo,
	profissao: profissao,
	exibiResumo: function(){
		console.log(`Nome: ${this.nome}
		Idade: ${this.idade}
		Sexo: ${this.sexo}
		Profissão: ${this.profissao}`)
	}
}	

//console.log(objeto)

/*Usando método do objeto*/
//objeto.exibiResumo()

/*Notção nova*/
let objeto2 = {
	/*Nome do par igual o da variavel pode-se omitir o mesmo
	o código vai usar o nome da variavel como o nome do par*/
	nome,
	idade,
	sexo,
	profissao,
	exibiResumo(){
		console.log(`Nome: ${this.nome}
		Idade: ${this.idade}
		Sexo: ${this.sexo}
		Profissão: ${this.profissao}`)
	}
}

//console.log(objeto2)
//objeto2.exibiResumo()

/*Modificando valor de um atributo do abjeto literal*/
objeto2.nome = 'Caicão' 
//console.log(objeto2)

/*Incluindo atributo novo*/
objeto2.peso = 115

/*Incluindo função*/
objeto2.dizerOi = () => console.log('Olá, tudo bem?')//Notação de arrow function

//objeto2.dizerOi()


/*Objeto literal unico*/
let assinatura = {
	idCliente: 1000,
	descricao: 'Internet banda larga',
	status() {
		console.log('Ativo')
	}
}

console.log(assinatura.descricao)

let y = assinatura

console.log(y.descricao)

y.descricao = 'Internet + Tv + Telefone'

//console.log(assinatura.descricao)
//console.log(y.descricao)

/*Construção de objeto utilizando funções*/
let Carro = function(){
	
	var velocidadeMaxima = 180
	var quilometrosRodados = 0
	this.cor = 'Preto'
	this.modelo = 'Fusca'
	this.velocidadeAtual = 0
	

	/*metodos*/
	this.acelerar = function() {
		//this.velocidadeAtual += 10
		//Usando método get e set para recuperar e alterar valores
		let velocidade = this.getVelocidadeAtual() + 50
		if(velocidade>velocidadeMaxima){
			velocidade = velocidadeMaxima
		}
		this.setVelocidadeAtual(velocidade)
		setQuilometrosRodados(0.07)
		console.log(quilometrosRodados)
	}

	this.getVelocidadeAtual = function (){
		return this.velocidadeAtual
	}

	this.setVelocidadeAtual = function (velocidadeAtual) {
		this.velocidadeAtual = velocidadeAtual
	}

	var setQuilometrosRodados =function (km){
		quilometrosRodados += km
	}
}

let carro = new Carro()
console.log(carro)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A veloidade atual do carro é: ${carro.getVelocidadeAtual()} Km/h`)

/*Funções Factory*/
/*Criando coleção de bicicletas*/

let Bicicleta = {
	cor: 'Branca',
	marcha: 'Única',
	aro: 12,
	pedalar() { console.log('Bicicleta andando!')}
}

console.log(Bicicleta)

let bicicletaFactory = function (cor, marcha, aro){
	return {
		cor,
		marcha,
		aro,
		pedalar() { console.log('Bicicleta andando!')}
	}
}


let Bicicleta2 = bicicletaFactory('Preta','Única',16)
console.log(Bicicleta2)
console.log(`Cor: ${Bicicleta2.cor}`)
Bicicleta2.pedalar()