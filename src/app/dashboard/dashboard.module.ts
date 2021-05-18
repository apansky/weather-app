import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CitySearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
