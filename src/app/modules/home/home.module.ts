import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { CenterhomeComponent } from './centerhome/centerhome.component';
import { EncuestahomeComponent } from './encuestahome/encuestahome.component';
import { Encuesta1homeComponent } from './encuestahome/encuesta1home/encuesta1home.component';
import { Encuesta2homeComponent } from './encuestahome/encuesta2home/encuesta2home.component';
import { Encuesta3homeComponent } from './encuestahome/encuesta3home/encuesta3home.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderHomeComponent,
    CenterhomeComponent,
    EncuestahomeComponent,
    Encuesta1homeComponent,
    Encuesta2homeComponent,
    Encuesta3homeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
