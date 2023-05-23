import { Controller, Get, Post, Redirect, UseGuards, Param, Query, Body } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { GetUserDto } from './auth/dto/get-user.dto';
import { LoginDto } from './auth/dto/login-user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@ApiTags('App')
export class AppController {

    @ApiQuery({ name: 'username', description: "nothing" })
    @ApiQuery({ name: 'password', description: "nothing" })
    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Query('username') username: string): GetUserDto {
        const user: GetUserDto = {
            'name': username
        }
        return user;
    }

    @Get()
    @Redirect('api')
    @ApiOkResponse({ 'description': 'redirection to /api' })
    getApi() { }

    @Get()
    @UseGuards(AuthenticatedGuard)
    @ApiOkResponse({ 'description': 'redirection to /api' })
    getHello() {
        return "<H1> HELLO WORLD !!! <H1>";
    }

}
