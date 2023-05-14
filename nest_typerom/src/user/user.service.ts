import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {

    }

    create(createUserDto: CreateUserDto) {
        const user = this.userRepo.create({ 'id': Date.now(), ...createUserDto });
        return this.userRepo.save(user);
    }

    findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepo.findOneOrFail({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        let user = await this.findOne(id);
        user.name = updateUserDto.name;
        this.userRepo.save(user);
    }

    remove(id: number) {
        return this.userRepo.delete(id);
    }
}
