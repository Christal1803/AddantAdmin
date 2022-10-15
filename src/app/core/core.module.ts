import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [

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
