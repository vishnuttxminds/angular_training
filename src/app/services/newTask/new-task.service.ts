import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  CretaTask : EventEmitter<string> = new EventEmitter<string>();

  onCrateTask(value: string){
    this.CretaTask.emit(value)
  }

  constructor() { }
}
