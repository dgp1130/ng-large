import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C911Component } from './c911.component';

describe('C911Component', () => {
  let component: C911Component;
  let fixture: ComponentFixture<C911Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C911Component]
    });
    fixture = TestBed.createComponent(C911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
