# Product Wizard Angular Signal Forms

Exemple de wizard produit basé sur `ProductDTO`, avec :
- un composant parent qui porte le `model`, le `form` et la navigation
- un sous-composant par étape
- des sous-blocs métier exprimés avec `Pick`
- une archive simple à intégrer dans un projet Angular standalone


## Arborescence

- `src/app/product-wizard/product-wizard.types.ts`
- `src/app/product-wizard/product-wizard.component.ts`
- `src/app/product-wizard/product-wizard.component.html`
- `src/app/product-wizard/product-wizard.component.css`
- `src/app/product-wizard/steps/*`

## Intégration rapide

```html
<app-product-wizard />
```

Dans le composant hôte standalone :

```ts
import { ProductWizardComponent } from './product-wizard/product-wizard.component'

@Component({
  standalone: true,
  imports: [ProductWizardComponent],
  template: `<app-product-wizard />`
})
export class AppComponent {}
```
