import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C92Component } from './c92.component';

describe('C92Component', () => {
  let component: C92Component;
  let fixture: ComponentFixture<C92Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C92Component]
    });
    fixture = TestBed.createComponent(C92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
