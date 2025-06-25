import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/pdoducts/products-list/products-list.component';
import { BasketListComponent } from './components/basket/basket-list/basket-list.component';
import { MatElementsComponent } from './components/ui/mat-elements.component';

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
