import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childMessage: string

  message="Message from child Component....."

  constructor() { }


  ngOnInit(): void {
  }

 @Output() messageEvent=new EventEmitter()
  clickMessage="User Clicked the button"
 sendMessage(){
   this.messageEvent.emit(this.clickMessage)
 }


}
