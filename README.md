# Rodar a aplicação 
- Primeiro configurar e rodar o backend
- Configurar e rodar o frontend

## Backend rodando com o Docker
- Entrar na pasta api
- Rode o comando na raíz da pasta: docker-compose up -d
- O DB em postgres vai rodar no mesmo container
- Quando o banco e a aplicação subir, rodar as migrations com npm run typeorm:run-migrations
- A aplicação irar rodar uma migration que gera um usuário de para realizar login e testar: email: joao@ilumeo.com; senha: admin1234
- Com tudo configurado a aplicação estará disponível em http://localhost:8080/api 

## Frontend
- Entrar na pasta app
- Rode o comando na raíz do projeto npm run install ou yarn
- Rode o comando na raíz do projeto yarn dev ou npm run dev
- crie um arquiv .env com VITE_API_URL=http://localhost:8080/api
- Aparecerá no console a url na qual o projeto estará disponível para acesso

## Test
Para rodar os testes da api, utilize os comandos abaixo na raíz do projeto
```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test --coverage
```
  
## Docker
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


