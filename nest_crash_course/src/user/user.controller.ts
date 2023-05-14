import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dot';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { };

    @ApiOkResponse({ type: User, isArray: true })
    @Get()
    @ApiQuery({ 'name': 'id', required: false })
    get_users(@Query('id') id?: string): User[] {
        if (id)
            return [this.userService.get_user(+id)];
        return this.userService.get_users();
    };

    @ApiOkResponse({ type: User })
    @Get(':id')
    @ApiParam({ name: 'id' })
    get_user_id(@Param('id', ParseIntPipe) id: number): User {
        return this.userService.get_user(id);
    };

    @ApiOkResponse({ type: User })
    @Post()
    @ApiCreatedResponse({ type: User })
    create_user(@Body() new_user_dto: CreateUserDto): User {
        return this.userService.create_user(new_user_dto);
    }
};
