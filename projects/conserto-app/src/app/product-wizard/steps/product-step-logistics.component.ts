import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormField } from '@angular/forms/signals'

@Component({
  selector: 'app-product-step-logistics',
  standalone: true,
  imports: [FormField],
  templateUrl: './product-step-logistics.component.html',
  styleUrl: './shared-step.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepLogisticsComponent {
  readonly group = input.required<any>()
}
