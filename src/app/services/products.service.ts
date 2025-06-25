import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/productInterface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = '../assets/products.json';

  private _data: Subject<ProductInterface[]> = new Subject();
  data$: Observable<ProductInterface[]> = this._data.asObservable();

  constructor(private http: HttpClient) { }

  load(): void {
    this.http.get<ProductInterface[]>(this.URL)
      .subscribe((d)=> {
        this._data.next(d);
      });
  }
}
