import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { BasketListComponent } from './components/basket-list/basket-list.component';
import { MatElementsComponent } from './components/mat-elements/mat-elements.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'basket',
    component: BasketListComponent,
  },
  {
    path: 'ui',
    component: MatElementsComponent,
  },
];
