import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent]
})
export class HomeModule {}
