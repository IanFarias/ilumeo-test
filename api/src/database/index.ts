import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: 'ilumeodb',
  password: 'ilumeo',
  database: 'database_ilumeo',
  synchronize: false,
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
