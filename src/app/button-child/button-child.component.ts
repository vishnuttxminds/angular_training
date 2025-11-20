import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrls: ['./button-child.component.css']
})
export class ButtonChildComponent implements AfterViewInit {

ngAfterViewInit(): void {

}

  theText: string = '';


  sayHello() {
    console.log('Hello from Child Component!');
    this.theText = 'Hello from Child Component!';
  }

   @ViewChild('childBtn') button!: ElementRef;

  highlightRed() {
    this.button.nativeElement.style.background = 'red';
  }

}
