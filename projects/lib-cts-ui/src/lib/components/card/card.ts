import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ZoomHover } from '../../directives/zoom-hover';
import { WithVariant } from '../../directives/with-variant';

/**
 * Card component
 *
 * - The card component is a versatile UI element that can be used to display content in a structured and visually appealing way. I
 * - Supports variants, which can be applied using the WithVariant directive.
 * - Uses the ZoomHover directive to add a zoom effect when hovering over the card, enhancing the user experience.
 *
 * @see WithVariant
 * @see ZoomHover
 *
 *
 * @example
 *
 *
 * <ui-card variant="primary" title="Card Title">
 *   <p>This is the main content of the card.</p>
 *   <div card-footer>
 *     <button>Action</button>
 *   </div>
 * </ui-card>
 *
 * In this example, we create a card with the primary variant and a title of "Card Title". The main content of the card is a paragraph, and the footer contains a button for an action.
 */
@Component({
  selector: 'ui-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  hostDirectives: [
    ZoomHover,
    {
      directive: WithVariant,
      inputs: ['variant'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  title = input<string>('Card title');
  openState = signal(true);
}
