import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {

  @Input()
  pend: number = 0

  @Output()
  clearAll: EventEmitter<any> = new EventEmitter<any>()

  clearAllF(){
    this.clearAll.emit()
  }  
}
