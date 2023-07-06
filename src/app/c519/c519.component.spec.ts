import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C519Component } from './c519.component';

describe('C519Component', () => {
  let component: C519Component;
  let fixture: ComponentFixture<C519Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C519Component]
    });
    fixture = TestBed.createComponent(C519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
