import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C451Component } from './c451.component';

describe('C451Component', () => {
  let component: C451Component;
  let fixture: ComponentFixture<C451Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C451Component]
    });
    fixture = TestBed.createComponent(C451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
