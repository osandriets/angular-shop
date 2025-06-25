import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { BasketInterface } from '../../interfaces/basketInterface';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-basket-item',
  imports: [
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatFabButton
  ],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemComponent {
  @Input() product!: BasketInterface;
  @Output() delete = new EventEmitter<BasketInterface>();

  onDelete(product: BasketInterface) {
    this.delete.emit(product);
  }
}
