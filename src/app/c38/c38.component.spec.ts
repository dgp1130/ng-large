import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C38Component } from './c38.component';

describe('C38Component', () => {
  let component: C38Component;
  let fixture: ComponentFixture<C38Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C38Component]
    });
    fixture = TestBed.createComponent(C38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
