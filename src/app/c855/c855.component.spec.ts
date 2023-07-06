import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C855Component } from './c855.component';

describe('C855Component', () => {
  let component: C855Component;
  let fixture: ComponentFixture<C855Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C855Component]
    });
    fixture = TestBed.createComponent(C855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
