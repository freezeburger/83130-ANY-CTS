import { Directive, inject } from '@angular/core';
import { ProductCrud } from '../services/product.crud';

@Directive({
  selector: '[productConsumer]',
})
export class ProductConsumer {
  protected autoload = true;

  dataService = inject(ProductCrud);

  ngOnInit(){
    if(this.autoload)  this.dataService.read();
  }

}
