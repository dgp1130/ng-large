import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C630Component } from './c630.component';

describe('C630Component', () => {
  let component: C630Component;
  let fixture: ComponentFixture<C630Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C630Component]
    });
    fixture = TestBed.createComponent(C630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
