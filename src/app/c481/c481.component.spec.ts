import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C481Component } from './c481.component';

describe('C481Component', () => {
  let component: C481Component;
  let fixture: ComponentFixture<C481Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C481Component]
    });
    fixture = TestBed.createComponent(C481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
