import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../logger.service'
@Component({
  selector: 'app-testhooks',
  templateUrl: './testhooks.component.html',
  styleUrls: ['./testhooks.component.css']
})
export class TesthooksComponent implements OnInit {

  constructor(private log:LoggerService) { }


  ngOnInit(): void {
  }

}
