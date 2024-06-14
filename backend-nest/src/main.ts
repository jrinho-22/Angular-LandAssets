import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Seeder } from './database/seeder/seeder.service';

async function bootstrap() {
  await NestFactory.createApplicationContext(AppModule)
    .then(appContext => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder);
      seeder
        .seed()
        .then(() => {
          logger.debug('Seeding complete !');
        })
        .catch(error => {
          logger.error('Seeding fal ed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });

    const app = await NestFactory.create(AppModule)
    app.enableCors();
    await app.listen(3002);
}
bootstrap();
