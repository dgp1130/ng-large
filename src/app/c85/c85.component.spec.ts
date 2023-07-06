import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C85Component } from './c85.component';

describe('C85Component', () => {
  let component: C85Component;
  let fixture: ComponentFixture<C85Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C85Component]
    });
    fixture = TestBed.createComponent(C85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
