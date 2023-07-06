import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C772Component } from './c772.component';

describe('C772Component', () => {
  let component: C772Component;
  let fixture: ComponentFixture<C772Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C772Component]
    });
    fixture = TestBed.createComponent(C772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
