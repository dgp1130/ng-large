import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C747Component } from './c747.component';

describe('C747Component', () => {
  let component: C747Component;
  let fixture: ComponentFixture<C747Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C747Component]
    });
    fixture = TestBed.createComponent(C747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
