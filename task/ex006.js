// Uma das formas mais usuais de se fazer essa adaptação é verificando os dados recebidos via parâmetro. Neste exemplo, vamos modificar o comportamento padrão do método exibirInfos para exibir tipos diferentes de informações a partir do que é especificado por parâmetro:

class User {
  constructor(nome, email, nascimento) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
  }


  // exibirInfos(tipoInfo) {
  //   if (tipoInfo === "basic") {
  //     return `dados básicos: ${this.nome}`
  //   }
  //   if (tipoInfo === "complete") {
  //     return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
  //   }
  // }


//   Usando o objeto arguments
// Em JavaScript, arguments é um objeto “array-like” presente em todas as funções e que corresponde a uma lista de argumentos passados para uma função ou método no momento da execução.

// Por exemplo, no método novoUser.exibirInfos('basic') o objeto arguments pode ser consultado da seguinte forma:

  // exibirInfos(tipoInfo) {
  //   console.log(arguments);
  //   if (tipoInfo === "basic") {
  //     return `dados básicos: ${this.nome}`
  //   }
  //   if (tipoInfo === "complete") {
  //     return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
  //   }
  // }


  // Sendo um objeto “array-like”, é possível iterar e acessar os parâmetros a partir de sua posição, como em qualquer array.

  // Refatorando a função:

  // exibirInfos() {
  //   const infoSelecionada = arguments[0]
  //   console.log('tipo de info selecionada', infoSelecionada);
  // }


//   Sendo um objeto “array-like”, é possível iterar e acessar os parâmetros a partir de sua posição, como em qualquer array.

// Refatorando a função:
exibirInfos() {
  const tipos = {
    basic: `dados básicos: ${this.nome}`,
    complete: `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
  }
  return tipos[arguments[0]]
}
}


// const novoUser = new User('Juliana', 'j@j.com', '2024-01-01')
// novoUser.exibirInfos('basic')
// novoUser.exibirInfos('complete')

const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
console.log(novoUser.exibirInfos('basic'));
console.log(novoUser.exibirInfos('complete'));
