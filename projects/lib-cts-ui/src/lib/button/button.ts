import { Component, Input } from '@angular/core';
import { Variants } from '../../types';
import { NgClass } from '@angular/common';


/**
 * A simple button component that can be used throughout the application.
 * It accepts a `variant` input to allow for different styles (e.g., primary, secondary).
 * The button uses content projection to allow for flexible content inside the button.
 */
@Component({
  selector: 'ui-button',
  imports: [NgClass],
  template: `
    <button [ngClass]="variant">
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

  .primary{
    background-color: cornflowerblue;
  }

  .secondary{
    background-color: lightseagreen;
  }

  .tertiary{
    background-color: crimson;
  }
  `,
})
export class Button {
  @Input() variant?: Variants;
}
