import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // counter: number = 0; --> its already available in the store

  constructor() {}
  ngOnInit() {}

  // ngOnInit() {}

  // onIncrement() {
  //   this.counter++;
  // }

  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
