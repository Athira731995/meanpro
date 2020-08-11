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
  test(){
    console.log(this.checked)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
