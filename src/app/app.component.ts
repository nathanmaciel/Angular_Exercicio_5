import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app007';

  toDoArray: Array<string> = ['ddd']
  pendingToDo: number = this.toDoArray.length

  titleCheck: boolean = false


  ngOnInit(){
    let aux: string|null = localStorage.getItem('array')
    if(aux != null) this.toDoArray = JSON.parse(aux)
    else this.toDoArray = []
    this.pendingToDo = this.toDoArray.length
  }
  

  addToDo(newToDoItem: string){
    this.toDoArray.push(newToDoItem)
    this.pendingToDo = this.toDoArray.length
    localStorage.setItem('array', JSON.stringify(this.toDoArray))
  }

  removeToDo(event: any){
    this.toDoArray.splice(this.toDoArray.indexOf(event, 0), 1)
    this.pendingToDo = this.toDoArray.length
    localStorage.setItem('array', JSON.stringify(this.toDoArray))
  }

  clear(){
    this.toDoArray = []
    this.pendingToDo = this.toDoArray.length
    localStorage.setItem('array', JSON.stringify(this.toDoArray))
  }

}
