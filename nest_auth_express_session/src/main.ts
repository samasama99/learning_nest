import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('type-orm-test')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe());

    app.use(session({
        secret: 'secret', // should be in ENV
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 }
    }));

    app.use(passport.initialize())
    app.use(passport.session())

    await app.listen(3000);
}

bootstrap();
