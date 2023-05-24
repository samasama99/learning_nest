import { Controller, Get, Post, Redirect, UseGuards, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { GetUserDto } from './auth/dto/get-user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@ApiTags('App')
export class AppController {

    @ApiQuery({ name: 'username', description: "nothing" })
    @ApiQuery({ name: 'password', description: "nothing" })
    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Query('username') username: string): GetUserDto | string {
        // const user: GetUserDto = {
        //     'name': username
        // }
        // return user;
        return "test;"
    }

    @Get()
    @Redirect('api')
    @ApiOkResponse({ 'description': 'redirection to /api' })
    getApi() { }

    @Get('hello')
    @UseGuards(AuthenticatedGuard)
    @ApiOkResponse({ 'description': 'redirection to /api' })
    getHello() {
        return "<H1> HELLO WORLD !!! <H1>";
    }

}
