import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C749Component } from './c749.component';

describe('C749Component', () => {
  let component: C749Component;
  let fixture: ComponentFixture<C749Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C749Component]
    });
    fixture = TestBed.createComponent(C749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
