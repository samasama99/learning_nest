import { GetUserDto } from './auth/dto/get-user.dto';
export declare class AppController {
    login(username: string): GetUserDto;
    getApi(): void;
    getHello(): string;
}
