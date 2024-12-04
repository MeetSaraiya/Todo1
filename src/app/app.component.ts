import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoModel } from './model/Todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoForm: FormGroup= new FormGroup({});
  todoObj : TodoModel = new TodoModel()

  constructor(){
    this.createForm()
  }
  createForm(){
    this.todoForm = new FormGroup({
      tid:new FormControl(this.todoObj.sno),
      title:new FormControl(this.todoObj.title),
      desc:new FormControl(this.todoObj.desc),
      status:new FormControl(this.todoObj.status)
  
    });
  }

  getAll(){
    
  }
  onAdd(){
   
  }
  
}
