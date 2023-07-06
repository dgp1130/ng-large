import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C575Component } from './c575.component';

describe('C575Component', () => {
  let component: C575Component;
  let fixture: ComponentFixture<C575Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C575Component]
    });
    fixture = TestBed.createComponent(C575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
