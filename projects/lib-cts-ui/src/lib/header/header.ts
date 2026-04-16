import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  HostListener, inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ui-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit {

  currentTime = new BehaviorSubject(Date.now());

  // cdr = inject(ChangeDetectorRef);

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    console.log('Window clicked', event);
  }

  ngOnInit(): void {

    console.log('Header component initialized');

    setInterval(() => {

        console.log('Updating current time in header component');
        this.currentTime.next(Date.now()) ;
        // this.cdr.markForCheck();

    }, 1000);
  }

}


