import { Injectable, signal } from '@angular/core';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root',
})
export class SignalServiceService {
  todoList = signal<Todo[]>([]);

  constructor() {}

  setTodos() {
    this.todoList.set([
      {
        sno: 1,
        title: 'title 1',
        desc: 'dscription for  todo1',
        active: true,
      },
      {
        sno: 2,
        title: 'title 2',
        desc: 'dscription for  todo2',
        active: true,
      },
      {
        sno: 3,
        title: 'title 3',
        desc: 'dscription for  todo3',
        active: true,
      },
      {
        sno: 4,
        title: 'title 4',
        desc: 'dscription for todo4',
        active: true,
      },
    ]);
  }

  getTodo(todoId:number){
    return this.todoList().find(todo=>todo.sno=todoId)!
  }

  deleteTodo(todoId: number): void {
    this.todoList.update(todo=>todo.filter(item=>item.sno!==todoId));
  }
}
