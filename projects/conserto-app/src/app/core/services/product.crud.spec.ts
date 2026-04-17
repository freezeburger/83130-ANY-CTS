import { TestBed } from '@angular/core/testing';

import { ProductCrud } from './product.crud';

describe('ProductCrud', () => {
  let service: ProductCrud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCrud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
