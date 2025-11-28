import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent implements OnInit {
  count = 0;

  myObserver = new Observable((observer) => {
    let firstValue = 0; 
    setInterval(() => {
      observer.next(firstValue++);
    }, 1000);
  });

  ngOnInit() {
 
   this.myObserver.subscribe((val: any) => {
      this.count = val;
    });
  }

}
