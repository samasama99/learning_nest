import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { };

    async validateUser(username: string, password: string): Promise<any> {
        const users = await this.userService.findAll();
        const user = users.find(user => user.name == username);

        if (!user)
            throw new NotFoundException();

        if (user.password == password) {
            const { password, ...rest } = user;
            return rest;
        }

        return null;
    }
}
