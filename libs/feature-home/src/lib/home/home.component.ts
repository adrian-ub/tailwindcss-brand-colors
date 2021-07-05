import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand, UtilBrandService } from '@ublabs/util-brand';

@Component({
  selector: 'ublabs-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  brands$!: Observable<Brand[]>;
  constructor(private utilBrandService: UtilBrandService) {}

  ngOnInit(): void {
    this.brands$ = this.utilBrandService.getBrands();
  }
}
