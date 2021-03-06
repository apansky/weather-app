import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routes as RoutesEnum } from '@shared/enums/routes';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) },
  { path: '**', redirectTo: RoutesEnum.DASHBOARD, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
