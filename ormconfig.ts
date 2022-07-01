import { DataSource, DataSourceOptions } from 'typeorm';

export const connectionParams: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST as any,
  port: process.env.DATABASE_PORT
    ? Number.parseInt(process.env.DATABASE_PORT)
    : undefined,
  username: process.env.DATABASE_USERNAME as any,
  password: process.env.DATABASE_PASSWORD as any,
  database: process.env.DATABASE_NAME as any,
  logging: true,
  // ! Synchronize should NEVER be enabled on upper environments!
  // * Migration usage is recommended instead for those.
  synchronize: process.env.STAGE === 'dev' ? true : false,
  entities: ['dist/src/4 - Core/domain/entities/*.entity.js'],
  migrations: ['dist/src/4 - Core/connectors/database/migrations/*.js'],
};

export const connectionSource = new DataSource(connectionParams);
