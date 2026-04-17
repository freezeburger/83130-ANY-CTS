import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Header, Card, ZoomHover } from '@dev/ui';
import { ProductCrud } from '../core/services/product.crud';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, Button, Header, JsonPipe, Card, ZoomHover],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class: 'app-root'
  },
  // encapsulation : ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('conserto-app');
}
