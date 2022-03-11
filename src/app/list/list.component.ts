import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  hoverIt:boolean;
  constructor(){
      this.hoverIt = false;
  }

  @Input()
  toDoItem:string = ""

  @Output() 
  deletev: EventEmitter<any> = new EventEmitter<any>()

  deletef(){
    this.deletev.emit(this.toDoItem)
  }
}
