import { Component } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrls: ['./button-child.component.css']
})
export class ButtonChildComponent {

  theText: string = '';


  sayHello() {
    console.log('Hello from Child Component!');
    this.theText = 'Hello from Child Component!';
  }

}
