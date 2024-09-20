Objetos, classes, herança, encapsulamento e polimorfismo

# Paradigmas de programação
Abordagens sobre como resolver problemas de programação, baseadas em uma teoria ou conjunto de princípios definidos.

# Orientação a objetos
Princípio de espelhar o mundo real atrvés de uma estrutura de objetos com características e ações, que interagem uns com os outros.

# O objeto literal é a forma mais comum de se criar objetos em JavaScript
const gato = {
  nome: "Churrumina",
  nascimento: "25/11/2018",
  status: {
    castrada: true,
    vacinada: true,
  },
  miar: function() {
    console.log("miau")
  }
}

Mas e se tivermos mais de um gato?
Mas se pensarmos em termos de um sistema, essa estrutura não é gerenciável nem prática.
Não dá para criar variáveis e objetos literais para cada um dos gatos, cachorros e papagaios que temos em uma clínica veterinária.

Para resolver esse problema, podemos ter um modelo que se reflita no objeto que queremos criar.
Ou seja, podemos ter uma base para a estrutura gato, conforme o exemplo abaixo. Podemos criar esse modelo no formato de objeto literal mesmo,
dizendo que modeloGato vai ter um nome, do tipo string, um nascimento, do tipo string, uma pelagem,
do tipo string, e os status, que é um bloco com outro objeto, dentro do qual temos castrado, vacinado, e vermifugado, do tipo booleano.

const modeloGato = {
  nome: "stringNome",
  nascimento: "stringData",
  status: {
    castrada: boolCastrado,
    vacinada: boolVacinado,
  },
}

Esse modelo é uma das bases da orientação a objetos. Com ele, não só abstraímos os conceitos da vida real e transformamos em estrutura de código, como abstraímos os próprios modelos.
A partir de um modelo, conseguimos criar instâncias diferentes, ou seja, cópias de um objeto.
Um dos fundamentos explorados da orientação a objetos é conseguir fazer essa abstração que pode ser reaproveitada para vários gatos, clientes, produtos e outras entidades. 


