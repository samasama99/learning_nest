import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateTaskDto } from './dto/update-task.dto';


@ApiTags('Task')
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post(':userId')
    create(@Param('userId', ParseIntPipe) userId: number, @Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto, userId);
    }

    @Get(':userId')
    findAll(@Param('userId', ParseIntPipe) userId: number) {
        return this.taskService.findAll(userId);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    //     return this.taskService.update(+id, updateTaskDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.taskService.remove(+id);
    // }
}
