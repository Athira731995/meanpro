import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {LoggerService} from '../logger.service'
@Component({
  selector: 'app-testhooks',
  templateUrl: './testhooks.component.html',
  styleUrls: ['./testhooks.component.css']
})
export class TesthooksComponent implements OnInit,OnChanges {
  value1="demo"
  ngOnChanges(changes:SimpleChanges){
    console.log("onnchanges called")
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    
    }

  }
  changeLog:any[]=[]
  constructor(private log:LoggerService) { }
  ngOnInit(): void {
    console.log("init method called")

  }
  change(){
    console.log(this.changeLog)
  }



}
