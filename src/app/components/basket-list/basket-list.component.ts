import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BasketService } from '../../services/basket.service';
import { Observable } from 'rxjs';
import { BasketItemComponent } from '../basket-item/basket-item.component';
import { BasketInterface } from '../../interfaces/basketInterface';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket-list',
  imports: [
    AsyncPipe,
    BasketItemComponent,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './basket-list.component.html',
  styleUrl: './basket-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketListComponent implements OnInit {

  basket$!: Observable<BasketInterface[]>;

  constructor(
    public basketService: BasketService,
  ) {
  }

  ngOnInit(): void {
    this.basket$ = this.basketService.data$;
  }

  delete($event: BasketInterface) {
    this.basketService.delete($event);
  }

  getTotal(basket: BasketInterface[]): number {
    return basket.reduce((acc: any, key: BasketInterface) => {
      return acc + key.price * key.count;
    }, 0);
  }
}
