import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import {NgFor} from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, NgFor, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:Todo[]=[];
  constructor(){
    this.todos = [
      {
        sno : 1,
        title : "title 1",
        desc : "dscription for  todo1",
        active: true
      },
      {
        sno : 2,
        title : "title 2",
        desc : "dscription for  todo2",
        active: true
      },{
        sno : 3,
        title : "title 3",
        desc : "dscription for  todo3",
        active: true
      },{
        sno : 4,
        title : "title 4",
        desc : "dscription for todo4",
        active: true
      },
    ] 
  }
  ngOnInit(): void {
    
  }
  todoDelete(todo:Todo){
    let idx:number = this.todos.indexOf(todo);
    this.todos.splice(idx,1);
  }
}
