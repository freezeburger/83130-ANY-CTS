import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Card } from '@dev/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Card ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cts-app-2');
}
