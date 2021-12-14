# Funcionalidades

## Criação de conta

**RF**
- Deve ser possível o usuário criar uma conta.

**RN**
- Não deve ser possível criar uma conta com o mesmo email.
- Não deve ser possível criar uma conta com o mesmo username.
- Não deve ser possível criar um password com menos de 6 caracteres.
- O username não pode ter mais de 30 caracteres.
- O username não pode ter menos de 6 caracteres.

## Criação de atividades

**RF**
- Deve ser possível criar uma atividade.

**RN**
- O usuário que criar a atividade deve ser um administrador.

## Criação de opções para uma atividade (options e default_code)

**RF**
- Deve ser possível criar uma opção

**RN**
- O usuário que criar a opção deve ser um administrador.
- O usuário pode cadastrar mais de uma opção para a mesma atividade
- Não deve ser possível criar uma opção para uma atividade não existente.
- Uma opção no array de options só pode ser vinculado uma vez.
- Uma opção no array de default_code pode ser vinculada mais de uma vez.

## Criação de dicas (tips)

**RF**
- Deve ser possível criar dica para uma atividade.

**RN**
- O usuário que criar a opção deve ser um administrador.
- O usuário pode cadastrar mais de uma dica para a mesma atividade
- Não deve ser possível criar uma dica para uma atividade não existente.
- Uma dica não pode se repetir para a mesma atividade.

## Criação de Fase

**RF**
- Deve ser possível criar uma fase

**RN**
- A fase deve ter apenas um mapa.
- Se o type for activity o max_level tem que ser no mínimo 3.
- Se o type for activity a quantidade de atividades associadas deve ser max_level * 5. Pois cada level tem 5 atividades.
- Se o type for class o max_level deve ser 1.
- Se o type for class o markdown_text deve ser preenchido.

## Ligação entre fase e atividades

**RN**
- A mesma atividade não pode pertencer mais de uma vez a uma fase

## Criação de mapa

**RF**
- Deve ser possível criar um mapa

**RN**
- O mapa deve ter no mínimo 1 atividade.

## Listagem do mapa e atividades

**RF**
- Deve ser possível listar os mapas com as fases

**RN**
- O usuário tem que estar autenticado
