import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'ui-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit {

  currentTime = signal(Date.now());

  ngOnInit(): void {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.currentTime.set(Date.now());
  }


}


