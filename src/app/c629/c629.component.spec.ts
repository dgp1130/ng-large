import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C629Component } from './c629.component';

describe('C629Component', () => {
  let component: C629Component;
  let fixture: ComponentFixture<C629Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C629Component]
    });
    fixture = TestBed.createComponent(C629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
