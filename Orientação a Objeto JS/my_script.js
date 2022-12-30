

//Modelo de Objeto
class ContaBancaria {
	//Agencia
	//Numero Conta
	//Saldo
	//Limite

	//Metodo de instancia do objeto
	constructor(){
		this.agencia = 32105
		this.numeroConta = 21212
		this.saldo = 50
		this.limite = 450
	}

	//Métodos
	consultar(){		
		console.log(this.saldo)
		return this.saldo
	}

	sacar(valorSaque){
		this.saldo -= valorSaque
	}

	depositar(valorDeposito){
		this.saldo += valorDeposito
	}

}

//Criando objetos a partir do modelo
let x = new ContaBancaria()
let y = new ContaBancaria()

//Executando método
x.consultar()
x.depositar(450)
x.consultar()
x.sacar(100)
x.consultar()

/*Pilar da abstração*/

class Cadeira {
	constructor(qtde_pernas,giratoria,cor){
		this.qtde_pernas = qtde_pernas
		this.giratoria = giratoria
		this.cor = cor
	}

	girarCadeira(){
		if(this.giratoria === true){
			console.log('A cadeira girou!')
		}else{
			console.log('A não é giratória!')
		}
	}
}
// Criando Array de ojetos
let cadeiras = Array()

//Adicionando objetos no Array
cadeiras.push(new Cadeira(4,false,'azul'))
cadeiras.push(new Cadeira(1,true,'vermelha'))

//Exibindo Array
console.log(cadeiras)

//Executando método do objeto
cadeiras[1].girarCadeira()

//Encapsulamento

class Tv {
	//Convenção para que atributos que não podem ser acessados diretamente
	constructor(){
		this._canais = Array(2, 4, 5, 7, 10)
		this._canalAtivo = 5
		this._volume = 5
	}

	//getters e setters
	get canalAtivo(){
		console.log(this._canalAtivo)
		return this._canalAtivo
	}
	set canalAtivo(canal){
		/*Vai verificar se o valor exista na lista de canais
		se sim atribui o index referente no Array a variavel 
		x se não retorna (-1)*/
		let x = this._canais.indexOf(canal)

		//Vai atribuir somente se o canal existir na lista
		if(x !== -1){
			this._canalAtivo = canal
		}
	}
}

let tv = new Tv()
console.log(tv)

/*No caso de atribuição de valor o compilador entende
que o método chamado é o set mesmo tendo o mesmo nome 
do método get*/
tv.canalAtivo = 7

//Invocando método get criado
tv.canalAtivo

/*Pilar da Herança*/
class Animal {
	constructor(cor,tamanho){
		this.cor = cor
		this.tamanho = tamanho
	}

	dormir(){
		console.log('Dormir')
	}
}

/*Indicando que a classe Cachorro herdara alguns
atributos da classe Animal*/
class Cachorro extends Animal {
	constructor(cor = 'caramelo', tamanho = 40){
		/*Operador super informa que os atributos da classe pai
		serão reaproveitados na classe filho*/
		/*Usando o operador super para passar paremetros pra
		a classe pai*/
		super(cor,tamanho)
		this.orelhas = 'Grandes'
	}

	correr(){
		console.log('Correr')
	}

	
	rosnar(){
		console.log('Rosnar')
	}
}

class Passaro extends Animal{
	constructor(cor,tamanho,bico = 'Curto'){
		super(cor, tamanho)
		this.bico = bico
	}

	voar(){
		console.log('Voar')
	}
	
}

class Papagaio extends Passaro {
	constructor(cor,tamanho, sabeFalar){
		super(cor,tamanho)
		this.sabeFalar = sabeFalar
	}

	fala(){
		console.log('Papagaio falando...')
	}
}

let loro = new Papagaio('Azul',20,true)
let dog = new Cachorro()
let piriquito = new Passaro('Verde',30)

console.log(dog)
console.log(piriquito)
console.log(loro)

dog.dormir()

/*Objetos literais/estaticos*/
class Produto {
	constructor(descricao,preco){
		this.descricao = descricao
		this.preco = preco
	}

	verDescricao(){
		console.log(`${this.descricao} por apenas ${this.preco}`)
	}
}

let produto = new Produto('Notebook',2200)
produto.verDescricao()

/*Objetos literais são usados quando não nescecidade de 
crar uma coleção de objetos*/
let produtoLiteral = {
	descricao: 'Geladeira',
	preco: 1800,
	verDescricao: function () {
		console.log(`${this.descricao} por apenas ${this.preco}`)
	}
}

produtoLiteral.verDescricao()