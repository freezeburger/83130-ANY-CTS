import { Injectable } from '@angular/core';
import { CrudAbstract, CrudEndpoint } from '@dev/core';
import { ProductDTO } from '../dto/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductCrud extends CrudAbstract<ProductDTO> {
  override endpoint:CrudEndpoint = `/api/products`;
}
