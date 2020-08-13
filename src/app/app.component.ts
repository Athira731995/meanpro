import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import {slideInAnimation} from './animation'
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'MyApp';
  project="sample project"
  showFiller = false;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  picker1:any
  test(){
    console.log(this.checked)
    console.log(this.picker1)

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
