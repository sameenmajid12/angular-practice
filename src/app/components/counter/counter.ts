import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  increaseCount = () => {
    this.count.update((val) => val + 1);
  };
  decreaseCount = () => {
    this.count.update((val)=>val-1)
  };

  resetCount = () => {
    this.count.set(0);
  };
}
