# Admin dashboard
aqui está todas as funcionalidades que o dashboard de admin vai fazer.

## Rotas
todas as rotas (menos a de login) devem conter o token JWT nos headers com o nome de authorization.

- POST `/sessions` rota de login
BODY: email, password

- POST `/maps/create` criar mapa
BODY: title, description, order

- POST `/phases/create` criar phase
BODY: title, map_id, max_level, type, markdown_text, order, description, hexadecimal_color

- POST `/activities/create` criar activity
BODY: description, title, type, is_needed_code, options, order, phase_id, tips

**options**: um array disso:
```ts
  id: string;
  name: string;
  abstracted_name: string; // opcional
  activity_id: string;
  type: string;
  hexadecimal_color: string;
```

- POST `/activities/add-options` adicionar a resposta e código padrão em uma atividade
BODY: activityAnswerOptionsIds, activityDefaultCodeOptionsIds, activity_id

Descrição: Por enquanto vamos fazer algo bem **simples**. Portanto, coloca apenas um input que receba o id da atividade, ou seja, quando o admin for adicionar a resposta, ele vai pegar o id no banco diretamente. Além disso, outros dois inputs, um para adicionar os id's da resposta e o outro para adicionar os id's do código padrão. 

Tem duas formas que pode ser feito isso, uma é a gente colocar um botão que vai criando um novo input de texto para inserir apenas um id de opção por vez, ou a gente coloca apenas um input e pedi para o ADM separar os id's por vírgula ou apenas um espaço em branco, após isso, pegamos o valor damos um `.strip` para criar um array de string e manda para o back.
