import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C602Component } from './c602.component';

describe('C602Component', () => {
  let component: C602Component;
  let fixture: ComponentFixture<C602Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C602Component]
    });
    fixture = TestBed.createComponent(C602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
