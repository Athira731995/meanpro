import { Component, OnInit, AfterViewInit, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template:`
  <p>This is Parent Component</p>
  <h1>Child's Message</h1>
  <input type="text" (input)="parentMessage=$event.target.value" >
  {{data}}
 Message through child event {{emessage}}
  <app-child [childMessage]="parentMessage" ></app-child>
  `
})
export class ParentComponent implements OnChanges,OnInit{

  ngOnChanges(changes:SimpleChanges){
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    
    }

  }
  changeLog:any[]=[]



  // @ViewChild(ChildComponent)child;

  constructor() { }
  
  parentMessage:string="Hello from parent....."

  data:string

  ngOnInit(): void {
    console.log("after init")
  }
  // ngAfterViewInit(){
  //   // renderWidgetInsideWidgetContainer();
  //   this.data=this.child.message
  //   console.log("child")

  // }
//this is  done by using output and event emitter
// emessage:string
//   receiveEvent($event){
//     this.emessage=$event
//     this.parentMessage=$event

//   }


}
