import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatCardModule, MatButtonModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { CatalogComponent } from './catalog/catalog.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CatalogComponent },
      { path: ':model', component: HouseDetailComponent }
      // { path: '*', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,

    RouterModule.forChild(routes)
  ],
  declarations: [CatalogComponent, HouseDetailComponent, LayoutComponent]
})
export class CatalogModule {}
