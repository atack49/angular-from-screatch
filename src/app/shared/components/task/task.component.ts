import { Component, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  text_field = signal('');
  messageError = signal('');
}

resetTask() {
  this.text_field.set('');
  this.messageError.set('');
} 

addTask() {
  if (!this.text_field().trim()) {
    this.messageError.set('The task name is required');
    return;
  }

  const newTask: ITask = {
    id: this.tasks().length + 1,
    name: this.text_field()
  };

  this.tasks.update(tasks => [...tasks, newTask]);
  this.resetTask();
}
}
function resetTask() {
  throw new Error('Function not implemented.');
}

function addTask() {
  throw new Error('Function not implemented.');
}

