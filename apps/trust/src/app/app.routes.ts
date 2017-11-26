// import { AuthGuard, AdminGuard } from '@trust/auth';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '@trust/home/src/home.module#HomeModule',
    data: { page: 'home' }
  },
  {
    path: 'catalog',
    loadChildren: '@trust/catalog/src/catalog#CatalogModule',
    data: { page: 'catalog' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
