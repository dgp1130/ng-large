import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C652Component } from './c652.component';

describe('C652Component', () => {
  let component: C652Component;
  let fixture: ComponentFixture<C652Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C652Component]
    });
    fixture = TestBed.createComponent(C652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
