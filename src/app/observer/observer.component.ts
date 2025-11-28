import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  concatMap,
  debounceTime,
  filter,
  from,
  fromEvent,
  interval,
  map,
  merge,
  Observable,
  of,
  reduce,
  retry,
  skip,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

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

  source5 = interval(1000);
  source6 = interval(500);

  source7 = interval(1000);
  example = this.source7.pipe(skip(3));

  source8 = interval(1000);
  timer$ = timer(5000);

  examplePipe = this.source8.pipe(takeUntil(this.timer$));

  first = timer(1000, 2000);
  second = timer(2000, 2000);
  combined = combineLatest([this.first, this.second]);

  merged2 = merge(this.source5, this.source6);

  numbersOf = of(1, 2, 3, 4, 5);
  evenNumbers = this.numbersOf.pipe(filter((num) => num % 2 === 0));

  numbersForSum = of(1, 2, 3, 4, 5);
  sum = this.numbersForSum.pipe(reduce((acc, value) => acc + value, 0));

  request = ajax('https://www.google.com/');
  retryRequest = this.request.pipe(retry(3));

  clicks = fromEvent(document, 'click');
  resultClick = this.clicks.pipe(concatMap(() => interval(1000).pipe(take(3))));

  resultClickMap = this.clicks.pipe(
    switchMap(() => interval(1000).pipe(take(3)))
  );

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

    // this.evenNumbers.subscribe((result) =>
    //   console.log('evenNumbers > ', result)
    // );

    // this.sum.subscribe((result) => console.log('sum > ', result));

    // this.merged2.subscribe(result => console.log('merged2 > ', result));
    
    // this.resultClick.subscribe((result) =>
    //   console.log('resultClick > ', result)
    // );

    // this.resultClickMap.subscribe((result) =>
    //   console.log('resultClick > ', result)
    // );

    // this.combined.subscribe((value) => console.log('combined > ', value));

    // this.example.subscribe((value) => console.log('example > ', value));

    this.examplePipe.subscribe(value => console.log('examplePipe > ', value));

    // this.retryRequest.subscribe(
    //   (result) => console.log(result),
    //   (error) => console.error('Retried 3 times, but still failed.', JSON.stringify(error))
    // );
  }
}
