import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName : string [] = ['spiderman', 'ironman', 'hulk', 'she hulk', 'thor'];
  public heroeBorrado?:string;
  borrar():void{
    this.heroeBorrado = this.heroesName.pop();
  }
}
