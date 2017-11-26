import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CatalogComponent, HouseDetailComponent]
})
export class CatalogModule {}
