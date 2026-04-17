import { ProductDTO } from '../core/dto/product.dto'

export type ProductGeneralStep = Pick<
  ProductDTO,
  'title' | 'description' | 'category' | 'brand' | 'sku'
>

export type ProductCommerceStep = Pick<
  ProductDTO,
  'price' | 'discountPercentage' | 'rating' | 'stock' | 'weight' | 'minimumOrderQuantity'
>

export type ProductLogisticsStep = Pick<
  ProductDTO,
  | 'dimensions'
  | 'warrantyInformation'
  | 'shippingInformation'
  | 'availabilityStatus'
  | 'returnPolicy'
  | 'meta'
>

export type ProductMediaStep = Pick<
  ProductDTO,
  'thumbnail' | 'images' | 'tags' | 'reviews'
>
