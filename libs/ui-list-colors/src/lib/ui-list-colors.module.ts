import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UtilBrandModule } from '@ublabs/util-brand';
import { UiEmptyListModule } from '@ublabs/ui-empty-list';

import { UiListColorsComponent } from './ui-list-colors/ui-list-colors.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    UtilBrandModule,
    ReactiveFormsModule,
    UiEmptyListModule,
  ],
  declarations: [UiListColorsComponent],
  exports: [UiListColorsComponent],
})
export class UiListColorsModule {}
