import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C202Component } from './c202.component';

describe('C202Component', () => {
  let component: C202Component;
  let fixture: ComponentFixture<C202Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C202Component]
    });
    fixture = TestBed.createComponent(C202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
