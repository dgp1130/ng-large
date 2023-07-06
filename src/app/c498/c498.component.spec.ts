import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C498Component } from './c498.component';

describe('C498Component', () => {
  let component: C498Component;
  let fixture: ComponentFixture<C498Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C498Component]
    });
    fixture = TestBed.createComponent(C498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
