import { Component, OnInit, Input, Output, EventEmitter, OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnChanges{

  @Input()
  childMessage: string

  message="Message from child Component....."

  constructor() { }
  ngOnChanges(changes:SimpleChanges){
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    
    }

  }
  changeLog:any[]=[]


  ngOnInit(): void {
  }

//  @Output() messageEvent=new EventEmitter()
//   clickMessage="User Clicked the button"
//  sendMessage(){
//    this.messageEvent.emit(this.clickMessage)
//  }


}
