import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C399Component } from './c399.component';

describe('C399Component', () => {
  let component: C399Component;
  let fixture: ComponentFixture<C399Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C399Component]
    });
    fixture = TestBed.createComponent(C399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
