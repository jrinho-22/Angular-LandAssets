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
import { AuthModule } from './auth/auth.module';
import { SaleModule } from './sale/sale.module';
import { Sale } from './sale/entities/sale.entity';

@Module({
  imports: [
    UsersModule,
    EstateModule,
    PlotModule,
    AuthModule,
    SaleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'juninho22',
      database: 'nest',
      entities: [Users, Estate, Plot, Sale],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [Seeder, Logger],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
// 