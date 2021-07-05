import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugPipe } from './slug/slug.pipe';

@NgModule({
  declarations: [SlugPipe],
  exports: [SlugPipe],
  imports: [CommonModule],
})
export class UtilBrandModule {}
