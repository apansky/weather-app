import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [
  { path: '', component: FavoritesComponent },
  { path: 'detail', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
