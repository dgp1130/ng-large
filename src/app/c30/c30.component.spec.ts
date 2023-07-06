import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C30Component } from './c30.component';

describe('C30Component', () => {
  let component: C30Component;
  let fixture: ComponentFixture<C30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C30Component]
    });
    fixture = TestBed.createComponent(C30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
