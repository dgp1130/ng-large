import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C536Component } from './c536.component';

describe('C536Component', () => {
  let component: C536Component;
  let fixture: ComponentFixture<C536Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C536Component]
    });
    fixture = TestBed.createComponent(C536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
