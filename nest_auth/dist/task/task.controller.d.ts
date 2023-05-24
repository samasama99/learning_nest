import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(userId: number, createTaskDto: CreateTaskDto): Promise<import("./entities/task.entity").Task>;
    findAll(userId: number): Promise<import("./entities/task.entity").Task[]>;
}
