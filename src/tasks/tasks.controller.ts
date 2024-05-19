import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { title } from 'process';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  } //forma mas corta: constructor(private tasksService: TasksService) {}//inyectamos el servicio

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }
  @Put()
  updateTask(@Param('id') id: string) {
    //return this.tasksService.updateTask();
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateFields);
  }
}
