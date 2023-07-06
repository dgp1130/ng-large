import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C110Component } from './c110.component';

describe('C110Component', () => {
  let component: C110Component;
  let fixture: ComponentFixture<C110Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C110Component]
    });
    fixture = TestBed.createComponent(C110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
