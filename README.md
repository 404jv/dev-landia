<div>
  <img src="https://img.shields.io/github/issues/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/404jv/dev-landia?style=for-the-badge"/>
</div>

<br />

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./logo.png" alt="Logo" width="160" height="40">
  </a>

  <h2 align="center">dev-landia</h2>

  <p align="center">
    💙 Aplicativo gratuito para aprender programação.
    <br />
    <a href="./docs.md"><strong>Explore a documentação »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Reporte algum Bug</a>
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Solicite uma feature</a>
  </p>
</div>

<details>
  <summary><h3>Tabela de conteúdos</h3></summary>
  <ol>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#layout-do-projeto-no-figma">Layout do projeto no Figma</a></li>
    <li><a href="#diagrama-do-banco-de-dados">Diagrama do banco de dados</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contribuições">Contribuições</a></li>
    <li>
      <a href="#como-executar-a-aplicação">Como executar a aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
  </ol>
</details>

## Tecnologias utilizadas 
- Node 
- React Native 
- Typescript
- PostgreSQL 
- TypeORM

## Layout do projeto no Figma 
- Clique [aqui](https://www.figma.com/file/r6sYsIta8Ae2lnoAIvTNxo/TCC?node-id=0%3A1) para acessar o layout

## Diagrama do banco de dados 
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

## Como executar a aplicação 
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

## Autores

<div>
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/53544964?v=4" width="80px;" alt="Foto do João Victor Ramalho">
  <br />
  <sub><b>João Victor Ramalho</b></sub></a> <a href="https://github.com/404jv" title="Github">🚀</a>
  [![Twitter Badge](https://img.shields.io/badge/-@401jv-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/401jv)](https://twitter.com/401jv)
  <img src="https://img.shields.io/badge/-joaovictorramalho7@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:joaovictorramalho7@gmail.com"/>
</div>

<div>
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/84464007?v=4" width="80px;" alt="Foto do Ruan Pablo">
  <br />
  <sub><b>Ruan Pablo</b></sub></a> <a href="https://github.com/1SyuLi" title="Github">👩‍🚀</a>
  <img src="https://img.shields.io/badge/-ruangoio01@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ruangoio01@gmail.com"/>
</div>

<div>
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86677587?v=4" width="80px;" alt="Foto do João Vitor Lima">
  <br />
  <sub><b>João Vitor Lima</b></sub></a> <a href="https://github.com/jvolima" title="Github">⚡</a>
  [![Twitter Badge](https://img.shields.io/badge/-@JvoLima1-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/JvoLima1)](https://twitter.com/JvoLima1)
  <img src="https://img.shields.io/badge/-jvolima2004@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvolima2004@gmail.com"/>
</div>
