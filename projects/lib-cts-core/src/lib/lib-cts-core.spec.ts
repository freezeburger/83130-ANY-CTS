import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCtsCore } from './lib-cts-core';

describe('LibCtsCore', () => {
  let component: LibCtsCore;
  let fixture: ComponentFixture<LibCtsCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibCtsCore],
    }).compileComponents();

    fixture = TestBed.createComponent(LibCtsCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
