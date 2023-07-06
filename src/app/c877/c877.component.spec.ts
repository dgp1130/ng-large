import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C877Component } from './c877.component';

describe('C877Component', () => {
  let component: C877Component;
  let fixture: ComponentFixture<C877Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C877Component]
    });
    fixture = TestBed.createComponent(C877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
