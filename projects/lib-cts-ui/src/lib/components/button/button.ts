import { Component } from '@angular/core';
import { WithVariant } from '../../directives/with-variant';

/**
 * A simple button component that can be used throughout the application.
 * It accepts a `variant` input to allow for different styles (e.g., primary, secondary).
 * The button uses content projection to allow for flexible content inside the button.
 */
@Component({
  selector: 'ui-button',
  imports: [],
  hostDirectives:[
    {
      directive: WithVariant,
      inputs: ['variant']
    }
  ],
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

    :host.primary button {
      background-color: cornflowerblue;
    }

    :host.secondary button {
      background-color: lightseagreen;
    }

    :host.tertiary button {
      background-color: crimson;
    }
  `,
})
export class Button {
}
