import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C802Component } from './c802.component';

describe('C802Component', () => {
  let component: C802Component;
  let fixture: ComponentFixture<C802Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C802Component]
    });
    fixture = TestBed.createComponent(C802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
