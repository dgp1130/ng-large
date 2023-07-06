import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C918Component } from './c918.component';

describe('C918Component', () => {
  let component: C918Component;
  let fixture: ComponentFixture<C918Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C918Component]
    });
    fixture = TestBed.createComponent(C918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
