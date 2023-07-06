import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C515Component } from './c515.component';

describe('C515Component', () => {
  let component: C515Component;
  let fixture: ComponentFixture<C515Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C515Component]
    });
    fixture = TestBed.createComponent(C515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
