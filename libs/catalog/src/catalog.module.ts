import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { CatalogComponent } from './catalog/catalog.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';


const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: '/:model', component: HouseDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,

    RouterModule.forChild(routes),
  ],
  declarations: [CatalogComponent, HouseDetailComponent]
})
export class CatalogModule {}
