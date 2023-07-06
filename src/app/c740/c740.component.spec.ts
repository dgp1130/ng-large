import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C740Component } from './c740.component';

describe('C740Component', () => {
  let component: C740Component;
  let fixture: ComponentFixture<C740Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C740Component]
    });
    fixture = TestBed.createComponent(C740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
