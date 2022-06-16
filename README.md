<div>
  <img src="https://img.shields.io/github/issues/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/404jv/dev-landia?style=for-the-badge"/>
</div>

<br />

<h2><a href="./README_english.md">English version</a></h2>

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./public/logo.png" alt="Logo" width="160" height="40">
  </a>

  <p align="center">
    💙 Aplicativo gratuito para aprender programação.
    <br />
    <a href="./DOCS.md"><strong>Explore a documentação »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Reporte algum Bug</a>
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Solicite uma funcionalidade</a>
  </p>
</div>



  <summary><h3>Tabela de conteúdos</h3></summary>
  <ol>
    <li><a href="#🏆-placar-de-contribuições">Placar de contribuições</a></li>
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
    <li><a href="#autores">Autores</a></li>
  </ol>

## 🏆 Placar de contribuições
<div align="center">

  | Pessoa | Issues fechadas |
  |:------:|:--------------:|
  | <img src="https://avatars.githubusercontent.com/u/86677587?v=4" width="100px;" alt="Foto do João Vitor Lima"/> <br/> <a href="https://github.com/jvolima">João Vitor Lima 🏆</a> | 13 |
  <img src="https://avatars.githubusercontent.com/u/53544964?v=4" width="100px;" alt="Foto do João Victor Ramalho"/> <br/> <a href="https://github.com/404jv">João Victor Ramalho</a> | 7 |
  | <img src="https://avatars.githubusercontent.com/u/84464007?v=4" width="100px;" alt="Foto do Ruan Pablo" /> <br/> <a href="https://github.com/1SyuLi">Ruan Pablo Gomes</a> | 7 |
  <img src="https://avatars.githubusercontent.com/u/104085570?v=4" width="100px;" alt="Foto do João Victor Ramalho"/> <br/> <a href="https://github.com/alqui290">David Duvoizem Motta</a> | 4 |

</div>

## Tecnologias utilizadas 
- [Node](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/) 
- [TypeORM](https://typeorm.io/)

## Layout do projeto no Figma 
- Clique [aqui](https://www.figma.com/file/jiwnsl1AbgdJGJ11MaPf0V/DevL%C3%A2ndia?node-id=0%3A1) para acessar o layout

## Diagrama do banco de dados 
![Diagrama do dev-landia](/public/diagram.png)

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
7. Clone o `.env.example`:
```bash
cp .env.example .env
```
Abra o arquivo e preencha com suas informações.


## Autores
<img src="https://avatars.githubusercontent.com/u/53544964?v=4" width="100px;" alt="Foto do João Victor Ramalho"/>
<a href="https://github.com/404jv">João Victor Ramalho</a> 🚀 

<br />
<br />

<div>
  <a href="https://twitter.com/401jv">
    <img src="https://img.shields.io/badge/@401jv-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
  </a>
  <a href="mailto:joaovictorramalho7@gmail.com">
    <img src="https://img.shields.io/badge/joaovictorramalho7@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/404jv/">
    <img src="https://img.shields.io/badge/João Victor Ramalho-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</div>

<br />
<br />

<img src="https://avatars.githubusercontent.com/u/84464007?v=4" width="100px;" alt="Foto do Ruan Pablo"/>
<a href="https://github.com/fixRuan">Ruan Pablo</a> 🚀 

<br />
<br />

<div>
  <a href="ruangoio01@gmail.com">
    <img src="https://img.shields.io/badge/ruangoio01@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>

  <a href="https://www.linkedin.com/in/fixRuan/">
    <img src="https://img.shields.io/badge/Ruan Pablo Gomes Rocha-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  <a/>
</div>

<br />
<br />

<img src="https://avatars.githubusercontent.com/u/86677587?v=4" width="100px;" alt="Foto do João Vitor Lima"/>
<a href="https://github.com/jvolima">João Vitor Lima</a> 🚀 

<br />
<br />

<div>
  <a href="https://twitter.com/JvoLima1">
    <img src="https://img.shields.io/badge/@JvoLima1-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
  </a>
  <a href="mailto:jvolima2004@gmail.com">
    <img src="https://img.shields.io/badge/jvolima2004@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-de-oliveira-lima-36b573215/">
    <img src="https://img.shields.io/badge/João Vitor de Oliveira Lima-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</div>

<br />
<br />

<img src="https://avatars.githubusercontent.com/u/104085570?v=4" width="100px;" alt="Foto do David Duvoizem Motta"/>
<a href="https://github.com/alqui290">David Duvoizem Motta</a> 🚀 

<br />
<br />

<div>
  <a href="mailto:david0motta@gmail.com">
    <img src="https://img.shields.io/badge/david0motta@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</div>


