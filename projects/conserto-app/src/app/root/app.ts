import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from '@dev/ui';


@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, Header, RouterLink],
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
