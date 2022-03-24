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
