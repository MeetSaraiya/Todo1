import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../Todo';
import { SignalServiceService } from '../../services/signal-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  imports: [FormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent implements OnInit {
  constructor(private route:ActivatedRoute , private service : SignalServiceService){}

  courseId:number = -1;

  todoObj : Todo = new Todo();



  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.courseId = params['id']
      console.log(this.courseId)
      this.todoObj = this.service.getTodo(this.courseId);
    });
  }

  editodo(t:any){
    console.log(t);
  }

}
