
// Vamos começar com a mesma função construtora que praticamos em vídeo:
function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}

// Em seguida, usamos o objeto User como protótipo para criar um outro objeto (Admin) através de sua própria função construtora:

function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com')
  this.role = role || 'estudante'
}


// Note que usamos o método call() para chamar a função User dentro de Admin. O this aqui vai se referir ao contexto de User que será “aproveitado” dentro de Admin.

// Nos parâmetros seguintes passamos de forma “hard coded” os parâmetros que temos que passar para User (nome e email), apenas como exemplo.

// Agora podemos usar o Object.create() para passar a propriedade prototype de User como protótipo de Admin. Assim, é possível usar o método exibirInfos() que existe em User mas não existe em Admin:

Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')
console.log(juliana.exibirInfos())
console.log(juliana.role)