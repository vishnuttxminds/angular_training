import { Component, inject, OnInit } from '@angular/core';
import { NewTaskService } from 'src/app/services/newTask/new-task.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
})
export class CreatetaskComponent implements OnInit {
  tasks: string[] = ['tasl 1', 'task 2', 'task 3', 'task 4'];

  taskServeice: NewTaskService = inject(NewTaskService);

  ngOnInit(): void {
    this.taskServeice.CretaTask.subscribe((value) => {
      this.tasks.push(value);
    });
  }
}
