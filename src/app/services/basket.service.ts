import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/productInterface';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { BasketInterface } from '../interfaces/basketInterface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private data: BasketInterface[] = [];

  private _data: BehaviorSubject<BasketInterface[]> = new BehaviorSubject<BasketInterface[]>([]);
  data$: Observable<BasketInterface[]> = this._data.asObservable();

  constructor() {
    this.data$.subscribe()
  }

  add(product: ProductInterface){
    const sameProduct = this.data.find((i) => {
      return i.uuid === product.uuid
    });

    if(sameProduct) {
      this.data.map((i) => i.uuid === product.uuid
        ? {...i, count: i.count++ }
        : i);
    } else {
      this.data.push({
        ...product,
        count: 1,
      });
    }

    this._data.next(this.data);
  }

  delete(product: BasketInterface){
    this.data = this.data.filter((i) => {
      return i.uuid !== product.uuid
    });

    this._data.next(this.data);
  }
}
