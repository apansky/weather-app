import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MaterialModule } from '@src/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritesComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FavoritesModule { }
