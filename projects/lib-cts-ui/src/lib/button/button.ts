import { Component, Input } from '@angular/core';
import { Variants } from '@dev/ui';

@Component({
  selector: 'ui-button',
  imports: [],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: `
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: lightgray;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: gray;
  }
  `,
})
export class Button {
  @Input() variant?: Variants;
}
