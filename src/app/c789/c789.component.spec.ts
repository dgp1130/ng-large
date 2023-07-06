import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C789Component } from './c789.component';

describe('C789Component', () => {
  let component: C789Component;
  let fixture: ComponentFixture<C789Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C789Component]
    });
    fixture = TestBed.createComponent(C789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
