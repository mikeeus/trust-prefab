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

import { PipesModule } from '@trust/pipes';

import { CatalogComponent } from './catalog/catalog.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [{ path: '', component: CatalogComponent }, { path: ':model', component: HouseDetailComponent }];

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

    RouterModule.forChild(routes),

    PipesModule
  ],
  declarations: [CatalogComponent, HouseDetailComponent, LayoutComponent, HouseCardComponent, FilterComponent]
})
export class CatalogModule {}
