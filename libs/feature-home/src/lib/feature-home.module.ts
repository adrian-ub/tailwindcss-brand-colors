import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UiHomeHeroModule } from '@ublabs/ui-home-hero';
import { UiListColorsModule } from '@ublabs/ui-list-colors';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UiHomeHeroModule,
    UiListColorsModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
})
export class FeatureHomeModule {}
