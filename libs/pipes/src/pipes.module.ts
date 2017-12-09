import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUrlPipe } from './image-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageUrlPipe],
  exports: [ImageUrlPipe]
})
export class PipesModule {}
