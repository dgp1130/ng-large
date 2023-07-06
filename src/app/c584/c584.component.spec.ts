import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C584Component } from './c584.component';

describe('C584Component', () => {
  let component: C584Component;
  let fixture: ComponentFixture<C584Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C584Component]
    });
    fixture = TestBed.createComponent(C584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
