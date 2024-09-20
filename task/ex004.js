// Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.


function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`
    }
  }
}

//  Perceba que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal, mas sim de uma função que retorna (através da palavra-chave return) um objeto.

// A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())

// No caso da factory function não há perda de contexto na execução dos métodos internos.

// Quais são as diferenças e qual devo usar?
// Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

// Boa parte dos frameworks e bibliotecas do Node.js atualmente vão trabalhar com classes ou construtores, instanciados com new.