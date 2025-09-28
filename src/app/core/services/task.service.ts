import { effect, Injectable, signal } from '@angular/core';
import { ITask } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task = signal<ITask[]>([]);

  constructor() {
    this.task.set(this.loadTaskFromLocalStorage());
   }

  adtask(task: ITask) {
    this.task.update(tasks => [...tasks, task]);
  }
  removeTask(taskId: number) {
    this.task.update(tasks => tasks.filter(task => task.id !== taskId));
  }
  saveTaskToLocalStorage = effect(() =>
    localStorage.setItem('tasks', JSON.stringify(this.task()))
  );
  loadTaskFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks) as ITask[];
    }
    return [];
  }
}
