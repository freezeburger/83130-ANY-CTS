import { Component } from '@angular/core';
import { WithVariant } from '../../directives/with-variant';
import { ZoomHover } from '../../directives/zoom-hover';

/**
 * A simple button component that can be used throughout the application.
 * It accepts a `variant` input to allow for different styles (e.g., primary, secondary).
 * The button uses content projection to allow for flexible content inside the button.
 */
@Component({
  selector: 'ui-button',
  imports: [],
  hostDirectives: [
    ZoomHover,
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

      &:hover {
        background-color: royalblue;
      }
    }

    :host.secondary button {
      background-color: lightseagreen;

      &:hover {
        background-color: mediumseagreen;
      }
    }

    :host.tertiary button {
      background-color: crimson;

      &:hover {
        background-color: firebrick;
      }
    }
  `,
})
export class Button {
}
