import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C857Component } from './c857.component';

describe('C857Component', () => {
  let component: C857Component;
  let fixture: ComponentFixture<C857Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C857Component]
    });
    fixture = TestBed.createComponent(C857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
