import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(`/home/roman/Desktop/https/ssl/ssl-certificate.key`),
    cert: fs.readFileSync(`/home/roman/Desktop/https/ssl/ssl-certificate.crt`),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  await app.listen(3000);
}
bootstrap();