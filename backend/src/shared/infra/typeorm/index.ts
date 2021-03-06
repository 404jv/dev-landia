import { DataSource } from 'typeorm';

export const postgresDatabaseSource = new DataSource({
  type: 'postgres',
  database: process.env.NODE_ENV === 'test' ? 'devlandia_test' : 'devlandia',
  port: 5432,
  username: 'docker',
  password: 'devlandia',
  host: process.env.DATABASE_HOST || 'localhost',
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
});
