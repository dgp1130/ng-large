import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C753Component } from './c753.component';

describe('C753Component', () => {
  let component: C753Component;
  let fixture: ComponentFixture<C753Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C753Component]
    });
    fixture = TestBed.createComponent(C753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
