import { NestFactory } from '@nestjs/core';
import { TypeormStore } from 'connect-typeorm';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'typeorm';

import { AppModule } from './app.module';
import { TypeORMSession } from './typeorm/entities/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3003;
  const sessionRepository = getRepository(TypeORMSession);
  app.setGlobalPrefix('api');
  app.use(
    session({
      cookie: {
        maxAge: 60000 * 60 * 24, // 1 day in ms
      },
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}
bootstrap();
