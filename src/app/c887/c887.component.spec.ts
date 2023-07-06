import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C887Component } from './c887.component';

describe('C887Component', () => {
  let component: C887Component;
  let fixture: ComponentFixture<C887Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C887Component]
    });
    fixture = TestBed.createComponent(C887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
