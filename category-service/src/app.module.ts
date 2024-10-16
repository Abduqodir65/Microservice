import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './modules/category/category.module';
import { Category } from '@modules';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "abrorbek",
      database: "n13",
      models: [Category],
      autoLoadModels: true,
      // sync: {force: true},
      synchronize: true,
    }),
    CategoryModule
  ],
})
export class AppModule {}
