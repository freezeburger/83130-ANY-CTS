import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, reduce, Subject } from 'rxjs';

@Component({
  selector: 'ui-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit {

  currentTime = new BehaviorSubject(Date.now());
  /**
   * Observable (base)
   *
   * Subject         - allows to emit values and be observed
   * ReplaySubject   - emits a specified number of previous values to new subscribers
   * BehaviorSubject - holds the latest value and emits it to new subscribers
   * AsyncSubject    - emits the last value to observers upon completion
   *
   * Operators
   *
   * map, filter, reduce, switchMap, merge, concatMap, tap...
   */

  // cdr = inject(ChangeDetectorRef);

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    console.log('Window clicked', event);
  }

  tick = () => {
    this.currentTime.next(Date.now());
  }

  ngOnInit(): void {

    console.log('Header component initialized');
    setInterval(this.tick, 1000);

  }


}


