import {Component} from "@angular/core";


@Component({
  selector:'app-counter',
  template: `
    <hr>
    <p>Counter {{counter}}</p>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="reset()" >reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  title = 'Hola mundo';
  counter = 10;

  increaseBy(value:number){
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }
}
