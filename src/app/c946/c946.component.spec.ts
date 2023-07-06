import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C946Component } from './c946.component';

describe('C946Component', () => {
  let component: C946Component;
  let fixture: ComponentFixture<C946Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C946Component]
    });
    fixture = TestBed.createComponent(C946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
