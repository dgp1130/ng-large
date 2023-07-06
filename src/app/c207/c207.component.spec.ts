import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C207Component } from './c207.component';

describe('C207Component', () => {
  let component: C207Component;
  let fixture: ComponentFixture<C207Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C207Component]
    });
    fixture = TestBed.createComponent(C207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
