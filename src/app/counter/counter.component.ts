import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number = 0;

  increamentCount() {
    if (this.count < 10) {
      this.count = this.count + 1;
    }
  }

  decreamentCount() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }
}
