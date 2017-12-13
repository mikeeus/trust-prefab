import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ContactComponent]
})
export class ContactModule {}
