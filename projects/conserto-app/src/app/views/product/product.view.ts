import { Component } from '@angular/core';
import { Button, Card, ZoomHover } from '@dev/ui';
import { ProductConsumer } from '../../core/directives/product.consumer';

@Component({
  selector: 'app-product',
  imports: [Button, Card, ZoomHover],
  templateUrl: './product.view.html',
  styleUrl: './product.view.scss',
})
export class ProductView extends ProductConsumer{
  /*
  override autoload = false;

  loadProducts(){
    this.dataService.read();
  }
  */
}
