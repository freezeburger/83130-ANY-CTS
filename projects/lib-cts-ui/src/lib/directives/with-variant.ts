import { Directive, input } from '@angular/core';

import { Variants } from '../../types';

@Directive({
  selector: '[uiWithVariant]',
  standalone: true,
  host: {
    '[class]': 'variant()'
  }
})
export class WithVariant {
  readonly variant = input<Variants>();

  ngAfterViewInit() {
   console.log('WithVariant directive initialized with variant:', this.variant());
  }

}
