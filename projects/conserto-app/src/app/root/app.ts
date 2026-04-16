import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Button } from '@dev/ui';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, Button ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class: 'app-root'
  }
})
export class App {
  protected readonly title = signal('conserto-app');
}
