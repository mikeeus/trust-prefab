import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { CatalogComponent } from './catalog/catalog.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HouseCardComponent } from './house-card/house-card.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: ':model', component: HouseDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,

    RouterModule.forChild(routes)
  ],
  declarations: [CatalogComponent, HouseDetailComponent, LayoutComponent, HouseCardComponent]
})
export class CatalogModule {}
