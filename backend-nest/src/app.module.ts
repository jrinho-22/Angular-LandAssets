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
      host: 'mysql-3b05c529-jrinho22-a643.i.aivencloud.com',
      port: 24746,
      username: 'avnadmin',
      password: 'AVNS_LCYoXPz-WQPkhY8R7k0',
      database: 'defaultdb',
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