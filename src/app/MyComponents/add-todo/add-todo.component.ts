import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import {FormsModule} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  // [(NgClass)]

}
