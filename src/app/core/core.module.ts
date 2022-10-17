import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { LayoutComponent } from './Components/layout/layout.component';
=======
import { LoginComponent } from './Components/login/login.component';
>>>>>>> f166239958f2e66f0090dd1bbaaac89f5ff4c604



@NgModule({
  declarations: [
<<<<<<< HEAD

  
    LayoutComponent
=======
    LoginComponent
>>>>>>> f166239958f2e66f0090dd1bbaaac89f5ff4c604
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    CommonModule,
  ],
  exports: [
    //LoginComponent,
  ],

})
export class CoreModule { }
