import { Component,EventEmitter,Input, Output, } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo! : Todo;
@Output() toDelete : EventEmitter<Todo> = new EventEmitter();
constructor(){
  
}

 onclick(todo:Todo){
console.log("delete todo ",todo.sno)
this.toDelete.emit(todo);
}

}
