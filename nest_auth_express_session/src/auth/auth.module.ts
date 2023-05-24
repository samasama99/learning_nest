import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { SessionSerializer } from './session.serializer';

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'local', session: true }),
    ],
    providers: [UserService, AuthService, SessionSerializer]
})

export class AuthModule { }
