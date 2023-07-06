import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C650Component } from './c650.component';

describe('C650Component', () => {
  let component: C650Component;
  let fixture: ComponentFixture<C650Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C650Component]
    });
    fixture = TestBed.createComponent(C650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
