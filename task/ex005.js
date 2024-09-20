// Podemos supor que, na classe User, seja necessário separar as propriedades de nome e sobrenome dos usuários, pois a base de dados guarda cada uma dessas informações em campos separados. Porém, em todas as comunicações que levam o nome do usuário, nome e sobrenome devem aparecer juntos.

// Uma forma de resolver isso seria através do setter de nome. Vamos alterar um pouco a classe User para receber, no construtor, #nome e #sobrenome:

export default class User {
  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || "estudante"
    this.#ativo = ativo
  }

//   A questão agora é que nome e sobrenome devem ser unidos no getter (para serem “mandados” para fora da classe como um único dado) e separados no setter, pois o método sempre receberá um nome completo, e #nome e #sobrenome são propriedades diferentes que estão salvas no banco em campos separados.

// Começando pelo setter:

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato não válido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome
    this.#sobrenome = sobrenome
  }

//   Aqui pegamos uma string única e separamos em nome e sobrenome, para que cada propriedade possa ser atualizada. Fizemos isso utilizando os métodos do JavaScript split() e join para manipular strings e arrays.

// Atualizamos agora os getters:
  get nome() {
    return this.#nome
  }
  get sobrenome() {
    return this.#sobrenome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`
  }
}

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
//console.log(novoUser.nome) //'Juliana'
//console.log(novoUser.sobrenome) //'Silva Souza'

