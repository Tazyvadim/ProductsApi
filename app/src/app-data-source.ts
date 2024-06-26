import 'reflect-metadata';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: '.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  migrationsRun: false,
  logging: false,
  dropSchema: false,
  entities: [
    __dirname + '/model/entity/**/*'
  ],
  migrations: [
    __dirname + '/migration/**/*'
  ],
  subscribers: [
    __dirname + '/subscriber/**/*'
  ]
})
