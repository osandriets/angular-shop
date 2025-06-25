import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mat-elements',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggle,
  ],
  templateUrl: './mat-elements.component.html',
  styleUrl: './mat-elements.component.scss'
})
export class MatElementsComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
