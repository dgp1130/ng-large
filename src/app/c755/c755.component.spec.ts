import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C755Component } from './c755.component';

describe('C755Component', () => {
  let component: C755Component;
  let fixture: ComponentFixture<C755Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C755Component]
    });
    fixture = TestBed.createComponent(C755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
