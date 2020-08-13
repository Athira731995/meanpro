import { Component, OnInit, AfterViewInit, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template:`
  <p>This is Parent Component</p>
  <h1>Child's Message</h1>
  {{data}}
 Message through child event {{emessage}}
  <app-child [childMessage]="parentMessage" (messageEvent)="receiveEvent($event)"></app-child>
  `
})
export class ParentComponent implements OnInit,AfterViewInit{


  @ViewChild(ChildComponent)child;

  constructor() { }
  
  parentMessage:string="Hello from parent....."

  data:string

  ngOnInit(): void {
    console.log("after init")
  }
  ngAfterViewInit(){
    this.data=this.child.message
    console.log("child")

  }
//this is  done by using output and event emitter
emessage:string
  receiveEvent($event){
    this.emessage=$event

  }


}
