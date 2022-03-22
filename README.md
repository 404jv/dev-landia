# dev-landia 🚀
## 💙 Aplicativo gratuito para aprender programação.

## Tecnologias utilizadas 🛠
- Node 
- React Native ⚛
- Typescript
- PostgreSQL 🐘
- TypeORM

## Layout do projeto no Figma 🎨
- Clique [aqui](https://www.figma.com/file/r6sYsIta8Ae2lnoAIvTNxo/TCC?node-id=0%3A1) para acessar o layout

## Diagrama do banco de dados 📚
![Diagrama do dev-landia](/diagram.png)

## Como executar a aplicação 👨🏾‍💻
### Pré-requisitos
* yarn
```bash
npm install --global yarn
```
* Node
Siga os passos da instalação no [site oficial](https://nodejs.org/en/download/)
* Docker
Siga os passos da instalação nessa [documentação](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a)

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

