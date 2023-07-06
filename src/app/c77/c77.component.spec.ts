import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C77Component } from './c77.component';

describe('C77Component', () => {
  let component: C77Component;
  let fixture: ComponentFixture<C77Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C77Component]
    });
    fixture = TestBed.createComponent(C77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
