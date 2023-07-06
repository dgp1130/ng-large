import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C222Component } from './c222.component';

describe('C222Component', () => {
  let component: C222Component;
  let fixture: ComponentFixture<C222Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C222Component]
    });
    fixture = TestBed.createComponent(C222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
