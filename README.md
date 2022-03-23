<div>
  <img src="https://img.shields.io/github/issues/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/404jv/dev-landia?style=for-the-badge"/>
</div>

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">dev-landia 🚀</h3>

  <p align="center">
    💙 Aplicativo gratuito para aprender programação.
    <br />
    <a href="./docs.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Reporte algum Bug</a>
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Solicite uma feature</a>
  </p>
</div>

## Tecnologias utilizadas 🛠
- Node 
- React Native 
- Typescript
- PostgreSQL 
- TypeORM

## Layout do projeto no Figma 🎨
- Clique [aqui](https://www.figma.com/file/r6sYsIta8Ae2lnoAIvTNxo/TCC?node-id=0%3A1) para acessar o layout

## Diagrama do banco de dados 📚
![Diagrama do dev-landia](/diagram.png)

## Licença
Distribuído sob a licença MIT. Consulte `LICENSE.txt` para obter mais informações.

## Contribuições
As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito bem vindas**.

Se você tiver uma sugestão para melhorar esse projeto, faça uma fork do repositório e crie um pull request. Você também pode simplesmente abrir uma issue com a tag "melhoria". 
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça uma fork
2. Crie sua Feature Branch (`git checkout -b feature/SuaFeature`)
3. Faça um Commit das suas mudanças (`git commit -m 'Adicionei minha feature'`)
4. Dê um Push para a Branch (`git push origin feature/SuaFeature`)
5. Abra um Pull Request 

## Como executar a aplicação 👨🏾‍💻
### Pré-requisitos
* yarn
```bash
npm install --global yarn
```
* Node: Siga os passos da instalação no [site oficial](https://nodejs.org/en/download/)
* Docker: Siga os passos da instalação nessa [documentação](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a)

### Instalação
1. Clone o repositório
```bash
git clone https://github.com/404jv/dev-landia.git
```
2. Acesse a pasta do projeto
```bash
cd dev-landia
```
3. Instale as dependências necessárias do back-end
```bash
cd backend
```
```bash
yarn
```
4. Inicialize o docker 
```bash
docker-compose up -d
```
5. Rode as migrations do TypeORM
```bash
yarn typeorm migration:run
```
6. Instale as dependências necessárias do mobile
```bash
cd ..
```
```bash
cd mobile
```
```bash
yarn
```

