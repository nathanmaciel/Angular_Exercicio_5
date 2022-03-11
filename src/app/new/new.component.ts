import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent{

  toDoInput: string = ''

  @Output()
  newToDo: EventEmitter<any> = new EventEmitter<any>()

  emitEvent(){
    if(this.toDoInput. length > 0) this.newToDo.emit(this.toDoInput)
    this.toDoInput = ''
  }
  

}
