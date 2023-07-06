import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C414Component } from './c414.component';

describe('C414Component', () => {
  let component: C414Component;
  let fixture: ComponentFixture<C414Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C414Component]
    });
    fixture = TestBed.createComponent(C414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
