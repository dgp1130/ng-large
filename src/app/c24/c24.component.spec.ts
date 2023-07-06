import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C24Component } from './c24.component';

describe('C24Component', () => {
  let component: C24Component;
  let fixture: ComponentFixture<C24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C24Component]
    });
    fixture = TestBed.createComponent(C24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
