import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children-child',
  templateUrl: './view-children-child.component.html',
  styleUrls: ['./view-children-child.component.css'],
})
export class ViewChildrenChildComponent {
  // @ViewChildren('firstName') texts!: QueryList<ElementRef>;

  // alterText() {
  //   this.texts.forEach((text) => {
  //     alert(text.nativeElement.value);
  //   });
  // }

  sayHello() {
    console.log('Hello from child!');
    alert('Hello from child!');
  }

}
