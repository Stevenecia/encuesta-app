import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Encuesta2homeComponent } from './encuestahome/encuesta2home/encuesta2home.component';
import { Encuesta3homeComponent } from './encuestahome/encuesta3home/encuesta3home.component';
import { Encuesta1homeComponent } from './encuestahome/encuesta1home/encuesta1home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
  {path: 'encuesta1home', component: Encuesta1homeComponent},
  {path: 'encuesta2home', component: Encuesta2homeComponent},
  {path: 'encuesta3home', component: Encuesta3homeComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
