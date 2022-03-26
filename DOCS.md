# Documentação 

<details>
  <summary><h3>Seções</h3></summary>
  <ol>
    <li>
      <a href="rotas-relacionadas-ao-usuário">Rotas relacionadas ao usuário</a>
      <ul>
        <li><a href="#criação-de-usuário">Criação de usuário</a></li>
        <li><a href="#autenticação-do-usuário">Autenticação do usuário</a></li>
      </ul>
    </li>
    <li>
      <a href="#rotas-relacionadas-aos-mapas">Rotas relacionadas aos mapas</a>
      <ul>
        <li><a href="#criação-de-mapas">Criação de mapas</a></li>
      </ul>
    </li>
    <li>
      <a href="#rotas-relacionadas-às-fases">Rotas relacionadas às fases</a>
      <ul>
        <li><a href="#criação-de-fases">Criação de fases</a></li>
      </ul>
    </li>
    <li>
      <a href="#rotas-relacionadas-às-atividades">Rotas relacionadas às atividades</a>
      <ul>
        <li><a href="#criação-de-atividades">Criação de atividades</a></li>
        <li><a href="#adicionar-opções-para-uma-atividade">Adicionar opções para uma atividade</a></li>
      </ul>
    </li>
    <li>
      <a href="#rotas-relacionadas-ao-game">Rotas relacionadas ao game</a>
      <ul>
        <li><a href="#listagem-da-árvore-de-fases">Listagem da árvore de fases</a></li>
      </ul>
    </li>
  </ol>
</details>

## Rotas relacionadas ao usuário 

### Criação de usuário
<div>
  <strong>POST</strong> /users/create 
</div>
Cadastra o usuário, se houver sucesso retorna o status code 201.

<br /><strong>JSON Params</strong>
```json
  {
    "name": "john doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "1234567890",
    "biography": "example of biography"
  }
```

<strong>Regras de negócio</strong>
- Atributo "biography" é opcional.
- Não deve ser possível cadastrar um novo usuário com um e-mail já existente.
- Não deve ser possível cadastrar um novo usuário com um username já existente.

<br />

### Autenticação do usuário
<div>
  <strong>POST</strong> /sessions
</div>
Autentica o usuário, se houver sucesso retorna um token JWT, o email e o nome do usuário.

<br /><strong>JSON Params</strong>
```json
  {
    "email": "johndoe@example.com",
    "password": "1234567890"
  }
```

<strong>Regras de negócio</strong>
- Não deve ser possível gerar um token se o e-mail informado não pertencer a nenhum usuário.
- Não deve ser possível autenticar um usuário se a senha estiver incorreta.

<br />

<a href="#documentação">Voltar para o topo</a>

<br />

## Rotas relacionadas aos mapas

### Criação de mapas
<div>
  <strong>POST</strong> /maps/create 
</div>
Cadastra um mapa, se houver sucesso retorna o status code 201.

<br /><strong>JSON Params</strong>
```json
  {
    "title": "first map",
    "description": "the first map of the journey",
    "order": 1,
  }
```

<strong>Regras de negócio</strong>
- Apenas usuários administradores devem ter acesso à essa rota.

<br />

<a href="#documentação">Voltar para o topo</a>

<br />

## Rotas relacionadas às fases

### Criação de fases
<div>
  <strong>POST</strong> /phases/create
</div>
Cadastra uma fase, se houver sucesso retorna o status code 201.

<br /><strong>JSON Params</strong><br />
Exemplo de criação de fase prática
```json
  {
    "title": "first practice phase",
    "map_id": "map id",
    "max_level": 3,
    "markdown_text": "# markdown text",
    "type": "practice",
    "order": 1,
  }
```
Exemplo de criação de fase teórica
```json
  {
    "title": "first theory phase",
    "map_id": "map id",
    "max_level": 1,
    "markdown_text": "# markdown text",
    "type": "theory",
    "order": 1,
  }
```

<strong>Regras de negócio</strong>
- Apenas usuários administradores devem ter acesso à essa rota.
- Não deve ser possível cadastrar uma fase prática com um max_level menor que 3.
- Não deve ser possível cadastrar uma fase teórica com um max_level diferente de 1.
- Não deve ser possível cadastrar uma fase se o map_id não pertencer a nenhum mapa existente.
- Atributo "markdown_text" é opcional.

<br />

<a href="#documentação">Voltar para o topo</a>

<br />

## Rotas relacionadas às atividades

### Criação de atividades
<div>
  <strong>POST</strong> /activities/create
</div>
Cadastra uma atividade, se houver sucesso retorna o status code 201.

<br /><strong>JSON Params</strong><br />
Exemplo de criação de atividade do tipo "block_activity"
```json
  {
    "title": "first activity",
    "description": "first activity description",
    "type": "block_activity",
    "is_needed_code": false,
    "order": 1,
    "phase_id": "phase id",
    "tips": ["tip 1", "tip 2"],
    "options": [
      {
        "name": "option 1",
        "type": "js_function",
        "hexadecimal_color": "#AB7DE8",
      },
      {
        "name": "option 2",
        "type": "command",
        "hexadecimal_color": "#B0169D",
      },
    ],
  }
```
Exemplo de criação de fase do tipo "quiz"
```json
  {
    "title": "first activity",
    "description": "first activity description",
    "type": "quiz",
    "is_needed_code": false,
    "order": 1,
    "phase_id": "phase id",
    "tips": ["tip 1", "tip 2"],
    "options": [
      {
        "name": "option 1",
        "type": "js_function",
        "hexadecimal_color": "#AB7DE8",
      },
      {
        "name": "option 2",
        "type": "command",
        "hexadecimal_color": "#B0169D",
      },
    ],
  }
```

<strong>Regras de negócio</strong>
- Apenas usuários administradores devem ter acesso à essa rota.
- Não deve ser possível cadastrar uma atividade se o phase_id não pertencer a nenhuma fase existente.

<br />

### Adicionar opções para uma atividade
<div>
  <strong>POST</strong> /activities/add-options
</div>
Adiciona opções para uma atividade, se houver sucesso retorna o status code 204.

<br /><strong>JSON Params</strong>
```json
  {
    "activity_id": "activity id",
    "activityAnswerOptionsIds": ["Option 1", "Option 2", "Option 3"],
    "activityDefaultCodeOptionsIds": ["Option 1"], 
  }
```

<strong>Regras de negócio</strong>
- Apenas usuários administradores devem ter acesso à essa rota.
- Não deve ser possível adicionar opções para uma atividade se o activity_id informado não pertencer a nenhuma atividade existente.

<br />

<a href="#documentação">Voltar para o topo</a>

<br />

## Rotas relacionadas ao game 

### Listagem da árvore de fases
<div>
  <strong>GET</strong> /game/tree
</div>

<br />

<strong>Regras de negócio</strong>
- Apenas usuários autenticados devem ter acesso à essa rota

<br />

<a href="#documentação">Voltar para o topo</a>

<br />