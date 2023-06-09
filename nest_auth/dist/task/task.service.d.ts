import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
export declare class TaskService {
    private taskRepository;
    private userService;
    constructor(taskRepository: Repository<Task>, userService: UserService);
    create(createTaskDto: CreateTaskDto, userId: number): Promise<Task>;
    findAll(userId: number): Promise<Task[]>;
}
