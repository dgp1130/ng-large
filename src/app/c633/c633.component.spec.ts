import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C633Component } from './c633.component';

describe('C633Component', () => {
  let component: C633Component;
  let fixture: ComponentFixture<C633Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C633Component]
    });
    fixture = TestBed.createComponent(C633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
