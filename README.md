# Serverless microservice

This application allowa you to create, update and delete users. Those uses are store in a Postgres database. This projects was designed using Clean Architecture. 
It is divided in 4 layers: 
- Interface -> Controllers
- Application -> UseCases
- Domain -> Data structures
- Infraestructure -> Persistence

## Software used to develop.
- node 20.18.0
- yarn as package manager
- serverless 3.0
- esbuild 0.27.1
- typescript 5.9.2

## Software requiered.
1. Docker
2. Docker compose
3. Node 20.18.0

## Steps to deploy and develop.

- Run command `nvm use`.
- To Star Postgresql run command `docker-compose up --build -d`
- Install dependencies in your host, run command `yarn install`.
- To start app, run command `npm run dev`
- To see the endpoint to point to "http://localhost:3000/dev/users"

Note:
- Database container uses the port 5432
- This deployment is just in development mode.
- This project is deployed in watch mode. it means that  each change in a file from src directory will transcript ts files to js in order to watch in real time those changes.
