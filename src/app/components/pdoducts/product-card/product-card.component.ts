import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from '../../../interfaces/productInterface';
import {
  MatCardModule,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: ProductInterface;
  @Output() add = new EventEmitter<ProductInterface>();

  onAdd(product: ProductInterface) {
    this.add.emit(product);
  }
}
