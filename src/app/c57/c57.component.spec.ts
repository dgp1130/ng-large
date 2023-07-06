import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C57Component } from './c57.component';

describe('C57Component', () => {
  let component: C57Component;
  let fixture: ComponentFixture<C57Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C57Component]
    });
    fixture = TestBed.createComponent(C57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
