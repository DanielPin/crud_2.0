module.exports = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'crud',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
