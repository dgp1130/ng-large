import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C732Component } from './c732.component';

describe('C732Component', () => {
  let component: C732Component;
  let fixture: ComponentFixture<C732Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C732Component]
    });
    fixture = TestBed.createComponent(C732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
