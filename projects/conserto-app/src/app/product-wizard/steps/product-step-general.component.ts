import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormField } from '@angular/forms/signals'

@Component({
  selector: 'app-product-step-general',
  standalone: true,
  imports: [FormField],
  templateUrl: './product-step-general.component.html',
  styleUrl: './shared-step.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepGeneralComponent {
  readonly group = input.required<any>()

  ngAfterViewInit() {
    console.log('group', this.group())
  }
}
