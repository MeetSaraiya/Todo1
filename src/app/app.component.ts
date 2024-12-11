import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { FormsModule } from '@angular/forms';
import { Todo } from './Todo';
import { SignalServiceService } from './services/signal-service.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  todoList = signal<Todo[]>([]);
  constructor(private service:SignalServiceService){
  
  }

  getItems(){
    this.service.setTodos();
    console.log("clicked")
    this.todoList = this.service.todoList;
  }
}
