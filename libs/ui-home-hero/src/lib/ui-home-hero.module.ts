import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { HomeHeroComponent } from './home-hero/home-hero.component';

@NgModule({
  imports: [CommonModule, ClipboardModule],
  declarations: [HomeHeroComponent],
  exports: [HomeHeroComponent],
})
export class UiHomeHeroModule {}
