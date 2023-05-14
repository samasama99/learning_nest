import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dot';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    create_user(body: CreateUserDto) {
        const user: User = { 'id': Date.now(), ...body };
        this.users.push(user);
        return user;
    }

    readonly users: User[] = [
        { 'id': 1, 'name': 'oussama' },
        { 'id': 2, 'name': 'test' },
        { 'id': 3, 'name': 'hello' },
        { 'id': 4, 'name': 'x' },
        { 'id': 5, 'name': 'y' },
    ];

    get_users(): User[] {
        return this.users;
    }

    get_user(id: number): User {
        const user = this.users.find(user => user['id'] === id);
        if (user)
            return user;
        throw new NotFoundException(`There is no user with id ${id} !`);

    }
}
