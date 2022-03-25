# Documentação 

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
- Atributo "biography" é opcional
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