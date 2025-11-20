import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ButtonChildComponent } from './button-child/button-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'my-angular-project';

  @ViewChild(ButtonChildComponent) child!: ButtonChildComponent;

  callChildMethod() {
    this.child.sayHello();
  }
}
