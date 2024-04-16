import { Logger, Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/entities/user.entity';
import { Seeder } from './seeder.service';

@Module({
  imports: [UsersModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'juninho22',
      database: 'nest',
      entities: [Users],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [Seeder, Logger],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

