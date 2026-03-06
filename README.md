# Serverless microservice

This application allows you to create and save users into a postgreSQL database. This project uses Clean Architecture which is divided in 4 layers:
- Interface -> Controllers
- Application -> UseCases
- Domain -> Data structures
- Infraestructure -> Persistence

## Software used.
- node 20.18.0
- yarn as package manager
- serverless 3.0
- esbuild 0.27.1
- typescript 5.9.2

## Steps to deploy and develop.

- Run command `nvm use`.
- To Start Postgresql run command `docker-compose up --build -d`
- To Install dependencies run command `yarn install`.
- To start app, run command `npm run dev`

Note:
- Database container uses the port 5432