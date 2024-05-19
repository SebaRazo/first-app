import { Injectable } from '@nestjs/common/decorators';

@Injectable({})
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }
  createTask() {
    return 'Creating a task';
  }

  updateTask() {
    return 'Updating a task';
  }
  deleteTask() {
    return 'Deleting a task';
  }
  patchTask() {
    return 'Patching a task';
  }
}
