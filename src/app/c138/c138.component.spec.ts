import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C138Component } from './c138.component';

describe('C138Component', () => {
  let component: C138Component;
  let fixture: ComponentFixture<C138Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C138Component]
    });
    fixture = TestBed.createComponent(C138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
