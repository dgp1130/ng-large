import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C494Component } from './c494.component';

describe('C494Component', () => {
  let component: C494Component;
  let fixture: ComponentFixture<C494Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C494Component]
    });
    fixture = TestBed.createComponent(C494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
