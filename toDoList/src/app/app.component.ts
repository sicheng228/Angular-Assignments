import { Component } from '@angular/core';
import { ServeToDoListService } from "./serve-to-do-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  todoList:string[];
  toAdd:string='';

  constructor(private serve:ServeToDoListService){}

  ngOnInit() {
    this.todoList = this.serve.getItems();
  }

  additem(){
    if(this.toAdd!=''){
      this.serve.setItems(this.toAdd);
    }
    this.toAdd='';
  }
  deleteItem(item){
    this.serve.deleteItems(item);
    this.todoList.splice(this.todoList.indexOf(item), 1);
  }
  searchItems(value){
    this.todoList= this.todoList.filter(e=>e.toLowerCase().includes(value.toLowerCase()));
    //e=>e.toLowerCase().startsWith(value.toLowerCase())
    if(value==''){
      this.todoList = this.serve.getItems();
    }
  }
  clearSearch(value){
    this.todoList = this.serve.getItems();
    value='';
  }
}
