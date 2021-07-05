import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../brand.interface';

@Injectable({ providedIn: 'root' })
export class UtilBrandService {
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>('./assets/brands.json');
  }
}
