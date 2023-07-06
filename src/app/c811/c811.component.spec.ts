import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C811Component } from './c811.component';

describe('C811Component', () => {
  let component: C811Component;
  let fixture: ComponentFixture<C811Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C811Component]
    });
    fixture = TestBed.createComponent(C811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
