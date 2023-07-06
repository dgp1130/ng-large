import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C317Component } from './c317.component';

describe('C317Component', () => {
  let component: C317Component;
  let fixture: ComponentFixture<C317Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C317Component]
    });
    fixture = TestBed.createComponent(C317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
