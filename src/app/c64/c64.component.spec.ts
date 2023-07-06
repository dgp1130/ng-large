import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C64Component } from './c64.component';

describe('C64Component', () => {
  let component: C64Component;
  let fixture: ComponentFixture<C64Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C64Component]
    });
    fixture = TestBed.createComponent(C64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
