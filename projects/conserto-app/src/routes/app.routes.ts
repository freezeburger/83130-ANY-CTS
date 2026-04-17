import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/views/product/product.view').then((m) => m.ProductView),
  },
];
