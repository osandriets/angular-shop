import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Observable } from 'rxjs';
import { BasketInterface } from '../../interfaces/basketInterface';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-app-toolbar',
  imports: [
    AsyncPipe,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NgIf,
    RouterLink,
    MatDividerModule,
  ],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent implements OnInit {
  @Input() title = '';

  basket$!: Observable<BasketInterface[]>;

  constructor(
    public basketService: BasketService,
  ) {
  }

  ngOnInit(): void {
    this.basket$ = this.basketService.data$;
  }

  getCount(items: BasketInterface[]) {
    return items.reduce((acc: any, key: BasketInterface) => {
      return acc + key.count;
    }, 0);
  }
}
