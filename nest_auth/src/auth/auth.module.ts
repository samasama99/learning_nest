import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'local' }),
    ],
    providers: [UserService, AuthService]
})

export class AuthModule { }
