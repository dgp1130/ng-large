import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C332Component } from './c332.component';

describe('C332Component', () => {
  let component: C332Component;
  let fixture: ComponentFixture<C332Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C332Component]
    });
    fixture = TestBed.createComponent(C332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
