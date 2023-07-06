import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C359Component } from './c359.component';

describe('C359Component', () => {
  let component: C359Component;
  let fixture: ComponentFixture<C359Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C359Component]
    });
    fixture = TestBed.createComponent(C359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
