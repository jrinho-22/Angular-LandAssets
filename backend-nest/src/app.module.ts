import { Logger, Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
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
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
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