import { Component } from '@angular/core';
import { ProductConsumer } from '../../core/directives/product.consumer';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [JsonPipe],
  templateUrl: './product-form.view.html',
  styleUrl: './product-form.view.scss',
})
export class ProductFormView extends ProductConsumer{

  override autoload = false;

}
