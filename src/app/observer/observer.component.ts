import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  concat,
  debounceTime,
  filter,
  from,
  fromEvent,
  interval,
  map,
  merge,
  Observable,
  of,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent implements OnInit, AfterViewInit {
  count = 0;
  numbers: number[] = [];
  source = from([1, 2, 3, 4, 5]);

  source1 = of(1, 2);
  source2 = of(3, 4);

  source3 = interval(1000).pipe(take(3));
  source4 = interval(500).pipe(take(6));
  merged = merge(this.source3, this.source4);

  // input = document.getElementById('input')!;
  // keyup = fromEvent(this.input, 'keyup').pipe(
  //   map((event: any) => event.target.value),
  //   debounceTime(1300)
  // );

   numbersOf = of(1, 2, 3, 4, 5);
   evenNumbers = this.numbersOf.pipe(filter(num => num % 2 === 0));

  concatenated = concat(this.source1, this.source2);

  doubled = this.source.pipe(map((value) => value * 2));
  filtered = this.source.pipe(filter((value) => value >= 3));

  tapped = this.source.pipe(
    tap((value) => console.log(`Processing: ${value}`))
  );

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

    this.doubled.subscribe((result) => {
      // console.log('Numbers > ', result);
      // this.numbers.push(result);
    });

    this.filtered.subscribe((result) => {
      // console.log('filtered > ', result);
      this.numbers.push(result);
    });

    this.tapped.subscribe((result) => {
      // console.log('tapped > ', result);
    });

    // this.concatenated.subscribe(result => console.log('concatenated > ', result));

    // this.merged.subscribe((result) => console.log('merged > ', result));
  }

  ngAfterViewInit() {
    // setInterval(() => {
    //   this.keyup.subscribe((result) => console.log('keyup > ', result));
    // }, 13000);

    this.evenNumbers.subscribe(result => console.log('evenNumbers > ', result));
  }
}
