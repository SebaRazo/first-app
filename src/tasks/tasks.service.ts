import { Injectable } from '@nestjs/common/decorators';
import { Task, TaskStatus } from './tasks.entity';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable({})
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.PENDING,
    },
  ];

  getTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updateFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    //task.title = title;
    //task.description = description;
    const newTask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id); //devuelve un array con los elementos que cumplen la condicion
    //return 'Deleting a task';
  }
  patchTask() {
    return 'Patching a task';
  }
}
