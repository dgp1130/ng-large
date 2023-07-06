import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C586Component } from './c586.component';

describe('C586Component', () => {
  let component: C586Component;
  let fixture: ComponentFixture<C586Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C586Component]
    });
    fixture = TestBed.createComponent(C586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
