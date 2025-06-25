import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../interfaces/productInterface';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-products-list',
  imports: [
    AsyncPipe,
    ProductCardComponent,
    MatGridTile,
    MatGridList,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<ProductInterface[]>;

  constructor(
    private productsService: ProductsService,
    private basketService: BasketService,
  ) {
  }

  ngOnInit(): void {
    this.productsService.load();
    this.products$ = this.productsService.data$;
  }

  add(event: ProductInterface){
    this.basketService.add(event);
  }
}
