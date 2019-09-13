import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.html'
})
export class Child implements OnInit {
  count = 0;
  step = 1;

  increment(){
    this.count += this.step;
  }

  decrement(){
    this.count -= this.step;
  }

  constructor() { }

  ngOnInit(): void { }
}
