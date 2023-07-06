import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C665Component } from './c665.component';

describe('C665Component', () => {
  let component: C665Component;
  let fixture: ComponentFixture<C665Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C665Component]
    });
    fixture = TestBed.createComponent(C665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
