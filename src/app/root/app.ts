import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiModule } from '../modules/ui/ui-module';
import { DefaultLayout } from '../standalone/default/default.layout';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, UiModule, DefaultLayout ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class: 'app-root'
  }
})
export class App {
  protected readonly title = signal('conserto-app');
}
