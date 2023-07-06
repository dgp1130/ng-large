import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C436Component } from './c436.component';

describe('C436Component', () => {
  let component: C436Component;
  let fixture: ComponentFixture<C436Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C436Component]
    });
    fixture = TestBed.createComponent(C436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
