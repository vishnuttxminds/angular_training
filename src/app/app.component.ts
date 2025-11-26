import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonChildComponent } from './button-child/button-child.component';
import { ViewChildrenChildComponent } from './view-children-parent/view-children-child/view-children-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-project';
  passwordMessage: string = '';
  @ViewChild(ButtonChildComponent) child!: ButtonChildComponent;

  callChildMethod() {
    this.child.sayHello();
  }

  onParentButtonClick() {
    this.child.highlightRed();
  }

  @ViewChildren(ViewChildrenChildComponent)
  children!: QueryList<ViewChildrenChildComponent>;

  alertChildren() {
    this.children.forEach((child) => child.sayHello());
  }

  onStrengthChange(msg: string) {
    this.passwordMessage = msg;
  }
}
