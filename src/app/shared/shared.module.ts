import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialModule } from '@src/material/material.module';
import { CityDetailComponent } from './components/city-detail/city-detail.component';

@NgModule({
  declarations: [
    CityDetailComponent
  ],
  exports: [
    CityDetailComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MaterialModule
  ]
}) export class SharedModule { }