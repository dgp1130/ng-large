import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C293Component } from './c293.component';

describe('C293Component', () => {
  let component: C293Component;
  let fixture: ComponentFixture<C293Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C293Component]
    });
    fixture = TestBed.createComponent(C293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
