import { Logger, Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/user.entity';
import { Estate } from './estate/estate.entity';
import { Seeder } from './database/seeder/seeder.service';
import { EstateModule } from './estate/estate.module';
import { PlotModule } from './plot/plot.module';
import { Plot } from './plot/plot.entity';

@Module({
  imports: [
    UsersModule,
    EstateModule,
    PlotModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'juninho22',
      database: 'nest',
      entities: [Users, Estate, Plot],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [Seeder, Logger],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
