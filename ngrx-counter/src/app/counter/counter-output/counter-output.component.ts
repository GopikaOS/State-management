import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  // @Input() counter: number = 0;
  counter: number = 0;
  constructor(private store: Store<{ counter: any }>) {}
  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;

    })
  }
}


