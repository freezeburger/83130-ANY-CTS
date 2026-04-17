import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core'
import {  form, min, minLength, pattern, required } from '@angular/forms/signals'

import { ProductDTO } from '../core/dto/product.dto'
import { ProductStepCommerceComponent } from './steps/product-step-commerce.component'
import { ProductStepGeneralComponent } from './steps/product-step-general.component'
import { ProductStepLogisticsComponent } from './steps/product-step-logistics.component'
import { ProductStepMediaComponent } from './steps/product-step-media.component'
import { ProductStepSummaryComponent } from './steps/product-step-summary.component'
import { createEmptyProduct } from './createEmptyProduct'

@Component({
  selector: 'app-product-wizard',
  standalone: true,
  imports: [
    ProductStepGeneralComponent,
    ProductStepCommerceComponent,
    ProductStepLogisticsComponent,
    ProductStepMediaComponent,
    ProductStepSummaryComponent,
  ],
  templateUrl: './product-wizard.component.html',
  styleUrl: './product-wizard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductWizardComponent {
  readonly step = signal(0)
  readonly maxStep = 4

  readonly model = signal<ProductDTO>(createEmptyProduct())

  readonly productForm = form(this.model, (p) => {
    required(p.title)
    minLength(p.title, 3)

    required(p.description)
    minLength(p.description, 10)

    required(p.category)
    required(p.brand)
    required(p.sku)

    min(p.price, 0)
    min(p.discountPercentage, 0)
    min(p.rating, 0)
    min(p.stock, 0)
    min(p.weight, 0)
    min(p.minimumOrderQuantity, 1)

    min(p.dimensions.width, 0)
    min(p.dimensions.height, 0)
    min(p.dimensions.depth, 0)

    required(p.meta.createdAt)
    required(p.meta.updatedAt)
    pattern(p.meta.barcode, /^[0-9A-Za-z-]*$/)

    required(p.thumbnail)
    required(p.availabilityStatus)
    required(p.returnPolicy)
  })

  readonly canGoNext = computed(() => {
    const form = this.productForm

    switch (this.step()) {
      case 0:
        return (
          form.title().valid() &&
          form.description().valid() &&
          form.category().valid() &&
          form.brand().valid() &&
          form.sku().valid()
        )
      case 1:
        return (
          form.price().valid() &&
          form.discountPercentage().valid() &&
          form.rating().valid() &&
          form.stock().valid() &&
          form.weight().valid() &&
          form.minimumOrderQuantity().valid()
        )
      case 2:
        return (
          form.dimensions.width().valid() &&
          form.dimensions.height().valid() &&
          form.dimensions.depth().valid() &&
          form.meta.createdAt().valid() &&
          form.meta.updatedAt().valid() &&
          form.meta.barcode().valid() &&
          form.availabilityStatus().valid() &&
          form.returnPolicy().valid()
        )
      case 3:
        return form.thumbnail().valid()
      default:
        return true
    }
  })

  readonly isLastStep = computed(() => this.step() === this.maxStep)

  next(): void {
    if (!this.canGoNext()) {
      this.markStepTouched()
      return
    }

    if (this.step() < this.maxStep) {
      this.step.update((value) => value + 1)
    }
  }

  previous(): void {
    if (this.step() > 0) {
      this.step.update((value) => value - 1)
    }
  }

  submit(): void {
    if (!this.productForm().valid()) {
      this.markStepTouched()
      return
    }

    console.log('Product payload ready', this.model())
  }

  addTag(value: string): void {
    const tag = value.trim()
    if (!tag) return

    this.model.update((product) => ({
      ...product,
      tags: [...product.tags, tag],
    }))
  }

  removeTag(index: number): void {
    this.model.update((product) => ({
      ...product,
      tags: product.tags.filter((_, i) => i !== index),
    }))
  }

  addImage(value: string): void {
    const image = value.trim()
    if (!image) return

    this.model.update((product) => ({
      ...product,
      images: [...product.images, image],
    }))
  }

  removeImage(index: number): void {
    this.model.update((product) => ({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    }))
  }

  addReview(): void {
    this.model.update((product) => ({
      ...product,
      reviews: [
        ...product.reviews,
        {
          rating: 0,
          comment: '',
          date: new Date().toISOString(),
          reviewerName: '',
          reviewerEmail: '',
        },
      ],
    }))
  }

  removeReview(index: number): void {
    this.model.update((product) => ({
      ...product,
      reviews: product.reviews.filter((_, i) => i !== index),
    }))
  }

  private markStepTouched(): void {
    const form = this.productForm;

    switch (this.step()) {
      case 0:
        form.title().markAsTouched()
        form.description().markAsTouched()
        form.category().markAsTouched()
        form.brand().markAsTouched()
        form.sku().markAsTouched()
        break
      case 1:
        form.price().markAsTouched()
        form.discountPercentage().markAsTouched()
        form.rating().markAsTouched()
        form.stock().markAsTouched()
        form.weight().markAsTouched()
        form.minimumOrderQuantity().markAsTouched()
        break
      case 2:
        form.dimensions.width().markAsTouched()
        form.dimensions.height().markAsTouched()
        form.dimensions.depth().markAsTouched()
        form.meta.createdAt().markAsTouched()
        form.meta.updatedAt().markAsTouched()
        form.meta.barcode().markAsTouched()
        form.availabilityStatus().markAsTouched()
        form.returnPolicy().markAsTouched()
        break
      case 3:
        form.thumbnail().markAsTouched()
        break
    }
  }
}
