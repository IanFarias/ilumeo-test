## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Running Dev Environment With Docker

- Crie o arquivo .env
- Como o DB vai rodar no mesmo container, usando Nestjs, a variavel "DATASOURCE_HOST" deve ser o nome do dado ao DB
- Rode o comando: docker-compose up

```bash
# Para executar em segundo plano no terminal
$ docker-compose up

# Para executar em segundo plano no terminal
$ docker-compose up -d

# Parar os containers
$ docker-compose stop

# Para excluir os containers
$ docker-compose down
```

## Create migrations

- Crie o arquivo de migração

```bash
$ npm run typeorm:create-migration ./src/database/migrations/nome_do_arquivo
```

- Rode o projeto para atualizar a dist

```bash
$ yarn start
```

- Rode o comando para roda a migration

```bash
$ npm run typeorm:run-migrations
```
