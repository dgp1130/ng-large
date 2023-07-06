import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C871Component } from './c871.component';

describe('C871Component', () => {
  let component: C871Component;
  let fixture: ComponentFixture<C871Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C871Component]
    });
    fixture = TestBed.createComponent(C871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
