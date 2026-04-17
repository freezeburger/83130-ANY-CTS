import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core'
import { FormField } from '@angular/forms/signals'
import { ProductDTO } from '../../core/dto/product.dto'

@Component({
  selector: 'app-product-step-media',
  standalone: true,
  imports: [FormField],
  templateUrl: './product-step-media.component.html',
  styleUrl: './shared-step.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepMediaComponent {
  readonly group = input.required<any>()
  readonly product = input.required<ProductDTO>()

  readonly tagAdded = output<string>()
  readonly tagRemoved = output<number>()
  readonly imageAdded = output<string>()
  readonly imageRemoved = output<number>()
  readonly reviewAdded = output<void>()
  readonly reviewRemoved = output<number>()

  readonly newTag = signal('')
  readonly newImage = signal('')

  emitTag(): void {
    this.tagAdded.emit(this.newTag())
    this.newTag.set('')
  }

  emitImage(): void {
    this.imageAdded.emit(this.newImage())
    this.newImage.set('')
  }
}
