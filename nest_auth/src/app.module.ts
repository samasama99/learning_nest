import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';

@Module({
    imports: [UserModule, TypeOrmModule.forRoot(config), TaskModule, AuthModule, PassportModule],
    controllers: [AppController],
    providers: [AppService, AuthService, LocalStrategy],
})
export class AppModule { }
