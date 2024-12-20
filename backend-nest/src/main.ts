import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { v2 as cloudinary } from 'cloudinary';
import { Seeder } from './database/seeder/seeder.service';

async function bootstrap() {
  await NestFactory.createApplicationContext(AppModule)
    .then(appContext => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder)
      seeder
        .seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch(error => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });

  cloudinary.config({
    cloud_name: 'dfmkh8oyt',
    api_key: '914698692997515',
    api_secret: 'gtBNKTROJca4UgaiQd6V9d7bv6Q' // Click 'View Credentials' below to copy your API secret
  });

  const app = await NestFactory.create(AppModule)
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
