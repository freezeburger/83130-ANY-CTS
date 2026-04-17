import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormField } from "@angular/forms/signals";

@Component({
  selector: 'app-product-step-commerce',
  standalone: true,
  imports: [FormField],
  templateUrl: './product-step-commerce.component.html',
  styleUrl: './shared-step.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepCommerceComponent {
  readonly group = input.required<any>()

  ngAfterViewInit() {
    console.log('group', this.group() )
  }
}
