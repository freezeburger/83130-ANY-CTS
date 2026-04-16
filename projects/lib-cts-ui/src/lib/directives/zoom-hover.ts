import { Directive } from '@angular/core';

@Directive({
  selector: '[uiZoomHover]',
  standalone: true,
  host: {
    'ui-zoom-hover': 'true',
    'style': `display:inline-block;transform: scale(1);transition: all 0.3s ease;`,
    // @Hostlistener
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave($event)',
    // @HostBinding
    '[style.transform]': 'transform'
  }
})
export class ZoomHover {
  transform: string = 'scale(1)';

  onMouseEnter(event: MouseEvent) {
    //(event.target as HTMLElement).style.transform = 'scale(1.1)';
    this.transform = 'scale(1.1)';
  }

  onMouseLeave(event: MouseEvent) {
    //(event.target as HTMLElement).style.transform = 'scale(1)';
    this.transform = 'scale(1)';
  }
}
