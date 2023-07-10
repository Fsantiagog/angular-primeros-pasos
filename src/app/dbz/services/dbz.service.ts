import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 7000
    }
  ];

  addCharacter(character: Character):void{
    character.id = uuid();
    const newCharacter : Character = {...character}
    this.characters.push(newCharacter);
  }

  onDeleteById(index : number){
    console.log('main : ' + index);
    this.characters.splice(index, 1);
  }

  deleteCharacterByid(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
