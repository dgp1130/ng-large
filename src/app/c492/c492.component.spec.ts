import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C492Component } from './c492.component';

describe('C492Component', () => {
  let component: C492Component;
  let fixture: ComponentFixture<C492Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C492Component]
    });
    fixture = TestBed.createComponent(C492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
