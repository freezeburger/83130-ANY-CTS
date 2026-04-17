import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Header, Card } from '@dev/ui';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, Button, Header, NgOptimizedImage, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class: 'app-root'
  }
})
export class App {
  protected readonly title = signal('conserto-app');
}
