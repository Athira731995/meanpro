import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {LoggerService} from '../logger.service'
@Component({
  selector: 'app-testhooks',
  templateUrl: './testhooks.component.html',
  styleUrls: ['./testhooks.component.css']
})
export class TesthooksComponent implements OnInit,OnChanges {
  ngOnChanges(changes:SimpleChanges){
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      // this.log.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }

  }

  constructor(private log:LoggerService) { }


  ngOnInit(): void {
  }

}
