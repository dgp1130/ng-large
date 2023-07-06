import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C122Component } from './c122.component';

describe('C122Component', () => {
  let component: C122Component;
  let fixture: ComponentFixture<C122Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C122Component]
    });
    fixture = TestBed.createComponent(C122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
