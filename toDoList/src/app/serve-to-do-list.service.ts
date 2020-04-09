import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeToDoListService {
  private items:string[]=["phone","laptop","earPhone","macbook","Sofa","Lamp","cup"];

  constructor() {}

  getItems(){
    return this.items;
  }
  setItems(item:string){
    this.items.push(item);
  }
  deleteItems(item){
    this.items.splice(this.items.indexOf(item), 1);
  }
}
