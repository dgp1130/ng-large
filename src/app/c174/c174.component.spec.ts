import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C174Component } from './c174.component';

describe('C174Component', () => {
  let component: C174Component;
  let fixture: ComponentFixture<C174Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C174Component]
    });
    fixture = TestBed.createComponent(C174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
