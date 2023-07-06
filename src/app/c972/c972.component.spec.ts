import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C972Component } from './c972.component';

describe('C972Component', () => {
  let component: C972Component;
  let fixture: ComponentFixture<C972Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C972Component]
    });
    fixture = TestBed.createComponent(C972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
