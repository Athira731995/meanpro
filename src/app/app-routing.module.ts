import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    data: {animation: 'HomePage'} 
  },{
    path:"about",
    component:AboutComponent,
    data: {animation: 'AboutPage'} 
  },{
    path:"test",
    component:TestComponent,
    data: {animation: 'FilterPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
