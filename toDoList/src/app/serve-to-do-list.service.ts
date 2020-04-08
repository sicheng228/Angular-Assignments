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
  deleteItems(key){
    this.items.splice(key, 1);
  }
}
