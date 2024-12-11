import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../../Todo';
import { SignalServiceService } from '../../services/signal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-from-signal',
  imports: [],
  templateUrl: './todos-from-signal.component.html',
  styleUrl: './todos-from-signal.component.css'
})
export class TodosFromSignalComponent implements OnInit {
  service = inject(SignalServiceService)
  router = inject(Router)

  todoList=signal<Todo[]>([]);
  ngOnInit(): void {
    this.todoList = this.service.todoList;
  }

  editTodo(id:number){

    this.router.navigate(['/edit',id]);
  }

  deleteTodoformComponent(id:number){
    this.service.deleteTodo(id);
  }
  
}
