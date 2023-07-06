import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C334Component } from './c334.component';

describe('C334Component', () => {
  let component: C334Component;
  let fixture: ComponentFixture<C334Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C334Component]
    });
    fixture = TestBed.createComponent(C334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
