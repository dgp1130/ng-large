import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C91Component } from './c91.component';

describe('C91Component', () => {
  let component: C91Component;
  let fixture: ComponentFixture<C91Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C91Component]
    });
    fixture = TestBed.createComponent(C91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
