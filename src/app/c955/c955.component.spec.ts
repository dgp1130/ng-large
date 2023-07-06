import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C955Component } from './c955.component';

describe('C955Component', () => {
  let component: C955Component;
  let fixture: ComponentFixture<C955Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C955Component]
    });
    fixture = TestBed.createComponent(C955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
