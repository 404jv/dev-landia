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
`;
