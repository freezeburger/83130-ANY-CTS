import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { BehaviorSubject, filter, map, reduce, Subject } from 'rxjs';

@Component({
  selector: 'ui-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit {

  currentTime = signal(Date.now());

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    console.log('Window clicked', event);
  }

   ngOnInit(): void {
    console.log('Header component initialized');
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.currentTime.set(Date.now());
  }


}


