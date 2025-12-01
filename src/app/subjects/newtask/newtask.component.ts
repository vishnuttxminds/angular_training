import { Component, inject } from '@angular/core';
import { NewTaskService } from 'src/app/services/newTask/new-task.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {

  newTask : string =''
  taskService : NewTaskService = inject(NewTaskService)

  onCreateTask(){
    console.log(this.newTask)
    this.taskService.onCrateTask(this.newTask)
  }

}
