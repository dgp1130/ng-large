import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C478Component } from './c478.component';

describe('C478Component', () => {
  let component: C478Component;
  let fixture: ComponentFixture<C478Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C478Component]
    });
    fixture = TestBed.createComponent(C478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
