Conhecendo a história da classe Javascript
Vamos acessar o link da documentação do MDN para classes. Se você já pesquisou ou ouviu algo sobre orientação a objetos, é muito possível que já tenha visto a palavra ou sintaxe de classe ou class, em inglês, conforme aparece na tela dessa documentação.

Essa sintaxe de classe, usando a palavra-chave class, não existia no JavaScript até a atualização ECMAScript 2015 ou ES6, uma das mais importantes dessa linguagem.

Antes disso, era possível fazer orientação a objetos com JavaScript, só que fazíamos isso exclusivamente com funções, já que a palavra-chave class não existia.

Essa palavra-chave foi implementada em 2015 devido a uma demanda da comunidade. Nessa época, o JavaScript havia se popularizado muito, e muitas pessoas que migravam de outras linguagens, acostumadas a trabalhar com orientação a objetos utilizando classes, passaram a solicitar a adição desse class, que então, foi adicionado.

Mas que isso tem a ver com o this adicionado pelo VS Code em nosso código?

O JavaScript possui um paradigma nativo que não é exatamente a orientação a objetos clássica das outras linguagens, mas sim um paradigma que chamamos de herança de protótipo.

A partir dele, o núcleo da linguagem inteira se constrói. E essa palavra-chave this tem tudo a ver com esse paradigma.

Se agora o JavaScript já tem a sintaxe de classe, por que não vamos direto para isso e começamos a mostrar como funciona essa palavra-chave?

Se voltarmos à documentação, o próprio MDN informa no começo do texto que a sintaxe para classes do JavaScript não introduz um novo modelo de herança de orientação a objetos, e que as classes provêm uma maneira simples e clara de se criar objetos e lidar com herança.

Isso quer dizer que a sintaxe de classes em JavaScript é construída em cima do modelo original da linguagem, o modelo de herança de protótipo. Portanto, para entender exatamente como funciona a orientação a objetos em JavaScript, antes de usar classes, devemos entender muito bem como funciona a herança de protótipo.

Resumindo, as classes são basicamente uma "capa" ou interface, que chamamos, às vezes, de "açúcar sintático", colocado em cima do modelo original, que utiliza funções.

A seguir, vamos entender o que é a herança de protótipo e como o this funciona.