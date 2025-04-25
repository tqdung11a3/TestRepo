import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tqdung11a3',
  password: 'tqdung12a3',
  database: 'gym-management-system',
  entities: [__dirname + '/infrastructure/orm/*.orm-entity.{js,ts}'],
  synchronize: true,
};

export default config;
