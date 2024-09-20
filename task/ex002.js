// outro exemplo, a partir de um objeto ao invés de uma função construtora:
const user = {
  exibirInfos: function (user) {
    return `${user.nome}, ${user.email}`
  }
}

// O JavaScript sempre tem que criar o protótipo a partir de um objeto, então criamos um objeto.
// Agora repetimos o processo, porém em vez de usar .prototype para criar a nova instância, podemos passar o próprio objeto user que acabamos de definir:

const juliana = Object.create(user)
console.log(juliana.exibirInfos({ nome: 'Juliana', email: 'j@j.com' }))

// Inclusive podemos testar se user entrou mesmo como protótipo usando o método isPrototypeOf, que retorna true ou false:

console.log(user.isPrototypeOf(juliana)) //true

// O objeto foi criado a partir do protótipo, porém se tentarmos acessar alguma propriedade, como nome, ou email, não vamos conseguir:

console.log(juliana.nome, juliana.email) //undefined

// É possível fazer desta forma:

juliana.nome = 'Juliana'
juliana.email = 'j@j.com'
console.log(juliana.nome, juliana.email)

// Mas essa forma não parece muito boa nem prática.

// É possível perceber que essa implementação do Object.create() é um pouco estranha. Caso o objeto precise ser iniciado com propriedades próprias, como fizemos na função construtora (e que é chamado justamente de “construtor” em orientação a objetos), como funcionaria?