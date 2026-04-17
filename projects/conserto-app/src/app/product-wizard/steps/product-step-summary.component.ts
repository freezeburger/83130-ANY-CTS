import { JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ProductDTO } from '../../core/dto/product.dto'

@Component({
  selector: 'app-product-step-summary',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <section class="step-layout">
      <h3>Récapitulatif</h3>
      <pre class="summary-box">{{ product() | json }}</pre>
    </section>
  `,
  styles: [
    `
      .step-layout {
        display: grid;
        gap: 1rem;
      }

      .summary-box {
        margin: 0;
        padding: 1rem;
        border-radius: 1rem;
        background: #020617;
        border: 1px solid #1e293b;
        overflow: auto;
        color: #cbd5e1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepSummaryComponent {
  readonly product = input.required<ProductDTO>()
}
