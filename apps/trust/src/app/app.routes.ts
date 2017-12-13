import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'apps/trust/src/app/about/about.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: '@trust/home/src/home.module#HomeModule',
    data: { page: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { page: 'about' }
  },
  {
    path: 'catalog',
    loadChildren: '@trust/catalog/src/catalog.module#CatalogModule',
    data: { page: 'catalog' }
  },
  {
    path: 'contact',
    loadChildren: '@trust/contact/src/contact.module#ContactModule',
    data: { page: 'contact' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
