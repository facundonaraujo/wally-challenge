import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
