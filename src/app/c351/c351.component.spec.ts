import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C351Component } from './c351.component';

describe('C351Component', () => {
  let component: C351Component;
  let fixture: ComponentFixture<C351Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C351Component]
    });
    fixture = TestBed.createComponent(C351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
