import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/views/product/product.view').then((m) => m.ProductView),
  },
  {
    path: 'form',
    loadComponent: () => import('../app/views/product-form/product-form.view').then((m) => m.ProductFormView),
  },
];
