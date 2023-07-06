import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C267Component } from './c267.component';

describe('C267Component', () => {
  let component: C267Component;
  let fixture: ComponentFixture<C267Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C267Component]
    });
    fixture = TestBed.createComponent(C267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
