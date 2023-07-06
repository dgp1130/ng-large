import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C836Component } from './c836.component';

describe('C836Component', () => {
  let component: C836Component;
  let fixture: ComponentFixture<C836Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C836Component]
    });
    fixture = TestBed.createComponent(C836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
