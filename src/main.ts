import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * pino-nestjs package
 */
import { Logger } from 'nestjs-pino';

/**
 * default logger in Nestjs
 */

// import { Logger } from '@nestjs/common';
// const logger = new Logger('[MAIN APP]');

async function bootstrap() {
  /**
   * pino-nestjs package
   */

  // const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const app = await NestFactory.create(AppModule);

  /**
   * default logger in Nestjs
   */
  // const app = await NestFactory.create(AppModule);

  /**
   * pino-nestjs package
   */
  app.useLogger(app.get(Logger));

  /**
   * default logger in Nestjs
   */
  // app.useLogger(logger);

  await app.listen(3000);

  console.log('============ Log After App Listen');
}

bootstrap()
  .then(() => {
    console.log(
      '=============== BootStrap().then() ----> App started on localhost:3000 🚀',
    );
  })
  .catch((error) => {
    console.error('bootstrap starting error ', error);
  });
