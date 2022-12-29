

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