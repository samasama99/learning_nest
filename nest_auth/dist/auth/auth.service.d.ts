import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(username: string, password: string): Promise<any>;
}
