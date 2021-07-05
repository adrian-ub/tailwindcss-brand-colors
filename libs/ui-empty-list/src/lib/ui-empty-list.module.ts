import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [EmptyListComponent],
  exports: [EmptyListComponent],
})
export class UiEmptyListModule {}
