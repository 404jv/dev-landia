<div>
  <img src="https://img.shields.io/github/issues/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/404jv/dev-landia?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/404jv/dev-landia?style=for-the-badge"/>
</div>

<br />

<h2><a href="./README.md">Versão Português</a></h2>

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./public/logo.png" alt="Logo" width="160" height="40">
  </a>

  <p align="center">
    💙 Free app to learn to program.
    <br />
    <a href="./DOCS.md"><strong>Explore the documentation »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Report any bug</a>
    ·
    <a href="https://github.com/404jv/dev-landia/issues">Request a feature</a>
  </p>
</div>



  <summary><h3>Table of contents</h3></summary>
  <ol>
    <li><a href="#🏆-contribution-scoreboard">Contribution scoreboard</a></li>
    <li><a href="#technologies-used">Technologies used</a></li>
    <li><a href="#project-layout-in-figma">Project layout in Figma</a></li>
    <li><a href="#database-diagram">Database diagram</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contribuitions">Contribuitions</a></li>
    <li>
      <a href="#how-to-run-the-application">How to run the application</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#authors">Authors</a></li>
  </ol>

## 🏆 Contribution scoreboard
<div align="center">

  | Person | Issues closed |
  |:------:|:--------------:|
  | <img src="https://avatars.githubusercontent.com/u/86677587?v=4" width="100px;" alt="Foto do João Vitor Lima"/> <br/> <a href="https://github.com/jvolima">João Vitor Lima 🏆</a> | 3 |
  | <img src="https://avatars.githubusercontent.com/u/84464007?v=4" width="100px;" alt="Foto do Ruan Pablo" /> <br/> <a href="https://github.com/1SyuLi">Ruan Pablo Gomes</a> | 1 |
  <img src="https://avatars.githubusercontent.com/u/53544964?v=4" width="100px;" alt="Foto do João Victor Ramalho"/> <br/> <a href="https://github.com/404jv">João Victor Ramalho</a> | 1 |

</div>

## Technologies used 
- [Node](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/) 
- [TypeORM](https://typeorm.io/)

## Project layout in Figma 
- Click [here](https://www.figma.com/file/jiwnsl1AbgdJGJ11MaPf0V/DevL%C3%A2ndia?node-id=0%3A1) to access layout

## Database diagram 
![Diagrama do dev-landia](/public/diagram.png)

## License
Distribuído sob a licença MIT. Consulte `LICENSE.txt` para obter mais informações.

## Contribuitions
Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contributions you make are **most welcome**.

If you have a suggestion to improve this project, fork the repository and create a pull request. You can also simply open an issue with the tag "improvement".
Don't forget to give the project a star! Thank you again!

1. Fork
2. Create your Feature Branch (`git checkout -b feature/SuaFeature`)
3. Make a commit of your changes (`git commit -m 'Adicionei minha feature'`)
4. Make a push to the branch (`git push origin feature/SuaFeature`)
5. Open Pull Request 

## How to run the application 
### Prerequisites
* yarn
```bash
npm install --global yarn
```
* Node: Follow the steps of installation in [oficial website](https://nodejs.org/en/download/)
* Docker: Follow the steps of installation in this [documentation](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a)

### Installation
1. Download the repository
```bash
git clone https://github.com/404jv/dev-landia.git
```
2. Access the project folder
```bash
cd dev-landia
```
3. Install back-end dependencies
```bash
cd backend
```
```bash
yarn
```
4. Initialize docker
```bash
docker-compose up -d
```
5. Run TypeORM migrations
```bash
yarn typeorm migration:run
```
6. Install mobile dependencies
```bash
cd ..
```
```bash
cd mobile
```
```bash
yarn
```

## Authors
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
<a href="https://github.com/1SyuLi">Ruan Pablo</a> 🚀 

<br />
<br />

<div>
  <a href="ruangoio01@gmail.com">
    <img src="https://img.shields.io/badge/ruangoio01@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
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