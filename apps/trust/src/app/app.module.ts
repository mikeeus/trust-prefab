import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app.routes';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    NxModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
