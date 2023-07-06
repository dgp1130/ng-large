import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C115Component } from './c115.component';

describe('C115Component', () => {
  let component: C115Component;
  let fixture: ComponentFixture<C115Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C115Component]
    });
    fixture = TestBed.createComponent(C115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
