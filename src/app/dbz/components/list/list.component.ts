import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characters: Character[] = [
    {
      id: 'd',
      name: 'Trunk',
      power: 15000
    }
  ];

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter<string>();

  onDeleteById(uuid: string):void{
    console.log(uuid);
    this.onDeleteId.emit(uuid);
  }
}
