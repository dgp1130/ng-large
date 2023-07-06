import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C468Component } from './c468.component';

describe('C468Component', () => {
  let component: C468Component;
  let fixture: ComponentFixture<C468Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C468Component]
    });
    fixture = TestBed.createComponent(C468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
