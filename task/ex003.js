// O Object.create() não tem um construtor. O padrão mais comum é uma função init ou constructor que deve ser criada manualmente:

const user = {
  init: function (nome, email) {
    this.nome = nome
    this.email = email
  },
  exibirInfos: function () {
    return `${this.nome}, ${this.email}`
  }
}

// A partir daí é possível usar user como protótipo de um novo objeto:

const juliana = Object.create(user)
juliana.init('Juliana', 'j@j.com')
console.log(juliana.exibirInfos())