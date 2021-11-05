export const class1 = `

## 🕵️‍♀️ O que são?

As funções têm como objetivo separar uma determinada parte do código e dar um nome para ela e sempre quando você chamar esse nome, aquela parte do código vai ser executada.

## ❓ Por que usar?

Pelo simples fato das funções darem a possibilidade de reaproveitar linhas de códigos em vários lugares do código. Caso tenha pensado: “Ah! Por que eu não uso um laço de repetição, invés disso?” Para não complicar vamos de exemplo: Imagine que você quer somar 1 + 1, 50 vezes e para isso você usa um for, tipo assim:
\`\`\`javascript
console.log('oi')
\`\`\`


\`\`\`C
int main(void) {
  for (int i = 0; i < 50; i++) {
    soma = 1 + 1;
  }
}
\`\`\`

Beleza, mas aí você percebe que quer somar 1 + 1 só mais 20 vezes para ter certeza que 
a resposta é 2 (por mais que eu discordo disso) Então você teria que usar mais um loop for, 
para fazer isso: 

\`\`\`C
int main(void) {
  for (int i = 0; i < 50; i++) {
    soma = 1 + 1;
  }
  for (int i = 0; i < 20; i++) {
    soma = 1 + 1;
  }
}
\`\`\`

Então, consegue ver essa repetição de linhas? Podemos mudar isso usando as funções! 
Eu sei que é um exemplo bobo, mas é só para você pegar a ideia e mais para frente você 
vai se deparar com alguns problemas aí sim tu vai agradecer pela existência das funções.

## 🤯 Entendendo as Funções
As funções basicamente consistem em nomear uma rotina, ou seja, uma rotina vai ser um
pedacinho do código que faz a mesma coisa, assim como a sua rotina de acordar cedo, escovar
os dentes, tomar banho, fazer o café e etc… Essa é uma rotina, certo? Por mais que você não 
acorde cedo nos Domingos, isso não vai deixar de ser uma rotina e outra coisa muito 
importante é que você segue um padrão nessa rotina, ou seja, não vai ter um dia em que você
faz o café e depois acorda, porque se isso acontece você tem que me ensinar 😂.

### ⚖ Leis das funções
Como nem tudo são flores, ao usar uma função você vai precisar respeitar algumas leis e partindo do fato que estamos aprendendo função com a linguagem C: <br />
  1. 🆔 O nome de uma função nunca começa com números ou caracteres especiais.
  2. 💎 Não crie duas ou mais funções com o mesmo nome.
  3. 💏 Tenha sempre apenas um tipo de retorno (void, int, char…)
  4. 🎓 Se você colocou para retornar um tipo, então você tem que retornar esse mesmo tipo.
  5. 💡 Coloque o tipo de cada um dos parâmetros (se tiver).
  6. 👼 Não se preocupe em memorizar essas regrinhas, com o tempo você pega o jeito, só pratique.

### 🗡 Declarando uma função
A declaração de funções em C é muito simples: TIPO NOME(), para não ficar muito complicado vamos de exemplos:

\`\`\`C
// [TIPO_DA_FUNÇÃO] [NOME_DA_FUNÇÃO]();

int retorna_int();

float retorna_float();

char retorna_char();

void retorna_nada();
\`\`\`

Uma dica de boas prática: é importante você criar funções com nomes bem claros, então já é bom ir treinando desde de cedo a dar nomes para suas funções, pois um bom Dev não escreve código só para a máquina entender, ele escreve código para outros devs entenderem. Caso esteja com problemas em nomear uma função provavelmente é porque essa função esteja fazendo muitas coisas e se esse for o caso então é uma boa hora de criar mais funções 😉.

### 🎾 Pegando os parâmetros
Os parâmetros são as variáveis passadas para uma função, eles vão ser usados para a nossa 
rotina, por exemplo se você tem uma rotina de ir comprar café todo domingo e 
sua mãe te dá o dinheiro para comprar, então o parâmetro vai ser o dinheiro pois 
sem ele a rotina não acontece, mas em alguns momentos você vai se deparar com funções
que não tem parâmetros tão importantes como nesse exemplo.

\`\`\`C
// [TIPO_DO_PARAMETRO] [NOME_DO_PARAMETRO];

int sacar_dinheiro(float valor_saque, char user_id[]);

char procurar_letra_f(char palavra[]);

void escreva_hello_world();
\`\`\`

### 🐱 Rotinas
Agora chegou o momento, vamos montar um exemplo bem simples e da forma em que iniciantes montam suas funções e depois eu quero mostrar algumas dicas e de como montar suas funções mais legíveis e mais performáticas. <br />

Vamos construir uma função que pega a nota de um aluno e retorna se ele foi Aprovado, Reprovado ou ficou de Recuperação.

\`\`\`C
char status_aluno(float nota);

int main(void) {

}

char status_aluno(float nota) {

}

\`\`\`

Okay o tipo da função é char, pois quero retornar um "A" de aprovado, um "R" de reprovado e um "O" para recuperação. E você deve estar se perguntando "Por quê a função foi escrita lá em cima e em baixo também? 🤔" bom basicamente é uma boa prática escrever a função em baixo, pois em cima ela  vai começar a empurrar a main() e com o tempo fica difícil de fazer manutenção no código e etc... Como nem tudo são flores, a linguagem C não permite que nós escrevemos a função lá embaixo direto, nós precisamos “falar” para o compilador que essa função existe e que vai ser implementada em algum momento lá em baixo, caso contrário dario um erro.

\`\`\`C
char status_aluno(float nota) {
  char status;
}
\`\`\`
Vamos focar apenas na função status_aluno, aqui eu quero te mostrar como a maioria dos iniciantes pensariam em fazer essa função, depois eu vou mostrar dicas de como melhorar essa função. Primeiro eu criei uma variável chamada status que vai receber “A”, “R” ou “O”, então vamos começar a verificar as notas:

\`\`\`C
char status_aluno(float nota) {
  char status;
  
  if (nota >= 60) {
    status = 'A';
  }
}
\`\`\`

Essa lógica é bem simples, não tem muito o que falar, neh? Eu recebo um parâmetro chamado nota, e agora eu comparo com 60, caso nota for maior ou igual a 60, então o estudante passou, ou seja, vamos retornar “A”.  

\`\`\`C
char status_aluno(float nota) {
  char status;
  
  if (nota >= 60) {
    status = 'A';
  }

  else if (nota < 60 && nota > 30) {
    status = 'O';
  }
}
\`\`\`

Algo muito comum é usar o else if, caso o cara não tenha passado restam duas opções: ou ele(a) reprovou ou ficou de recuperação, por isso vamos usar o else if e não apenas o else. Caso o estudante tenha uma nota menor que 60, mas ainda maior do que 30, então ele(a) ficou de recuperação e status recebe o “O”.

\`\`\`C
char status_aluno(float nota) {
  char status;
  
  if (nota >= 60) {
    status = 'A';
  }

  else if (nota < 60 && nota > 30) {
    status = 'O';
  }

  else {
    status = 'R';
  }
}
\`\`\`

Então se ele(a) Não passou e também não ficou de recuperação, essa pessoa então vai reprovar, certo? Aqui algo super comum é colocar o else no  final e status recebe “R”. Agora algo super importante, ainda não terminamos essa função porque ainda não temos o retorno dela.

\`\`\`C
char status_aluno(float nota) {
  char status;
  
  if (nota >= 60) {
    status = 'A';
  }

  else if (nota < 60 && nota > 30) {
    status = 'O';
  }

  else {
    status = 'R';
  }

  return status;
}
\`\`\`
O return é a palavrinha mágica que vai falar para o compilador “Olha! para tudo por aqui e retorna esse valor” Claro que às vezes não vai ter um valor para retornar como é caso de uma função void, porém você pode usar o return de boa desde que ele não retorna um valor.

### 🐱‍👤 Se aprofundando nas rotinas
Nesse artigo eu não quero apenas falar sobre como criar funções e como elas funcionam, aqui eu quero ir além e falar de como construir funções mais performáticas e mais legíveis.  <br />
Agora sim! Nossa função está pronta, porém podemos melhorar isso… Vamos começar removendo essa variável “status”, pois não precisamos dela, basta usar um return em cada condição e já entregar aquilo que procuramos.

\`\`\`C
char status_aluno(float nota) {
  if (nota >= 60) {
    return 'A';
  }

  if (nota < 60 && nota > 30) {
    return 'O';
  }

  else {
    return 'R';
  }
}
\`\`\`

Outra coisa que podemos tirar é os else’s, pois pensa só, se o aluno(a) Tirou mais do que 60 então ele(a) Vai cair no primeiro if que vai ter um return que vai parar com a função ali mesmo, ou seja, nós não vamos passar do primeiro if a não ser que o estudante esteja reprovado ou ficou de recuperação.

\`\`\`C
char status_aluno(float nota) {
  if (nota >= 60) {
    return 'A';
  }
 
  if (nota < 60 && nota > 30) {
    return 'O';
  }
 
  else {
    return 'R';
  }
}
\`\`\`

Agora vamos tirar o outro else também porque caso o estudante não tenha passado ou ficado de recuperação, nós temos certeza que ele(a) está reprovado,  então por quê não só retornar “R” De uma vez?

\`\`\`C
char status_aluno(float nota) {
  if (nota >= 60) {
    return 'A';
  }
 
  if (nota < 60 && nota > 30) {
    return 'O';
  }
 
  return 'R';
}

\`\`\`

E uma última coisinha que eu particularmente prefiro, é tirar essas chaves e deixar tudo em uma mesma linha, ficando assim: 
\`\`\`C
char status_aluno(float nota) {
  if (nota >= 60) return 'A';
 
  if (nota < 60 && nota > 30) return 'O';
 
  return 'R';
}
\`\`\`

🎉E VOILÁ! Lindo demais, neh? Terminamos essa função, espero que você use essas dicas para deixar suas funções mais performáticas e com mais legibilidade. 

🧠 Você pode aprender qualquer coisa e até a próxima.

---
<p align="center">Feito com 💚 por João Victor Ramalho Alves<p>
`;
