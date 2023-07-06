import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C394Component } from './c394.component';

describe('C394Component', () => {
  let component: C394Component;
  let fixture: ComponentFixture<C394Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C394Component]
    });
    fixture = TestBed.createComponent(C394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
