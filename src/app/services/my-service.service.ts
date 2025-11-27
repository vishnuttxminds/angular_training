import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private data: string[] = [];
  getData(): string[] {
    return this.data;
  }
  addData(newData: string) {
    this.data.push(newData);
  }
  constructor() {}
}
