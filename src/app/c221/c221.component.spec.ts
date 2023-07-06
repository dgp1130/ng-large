import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C221Component } from './c221.component';

describe('C221Component', () => {
  let component: C221Component;
  let fixture: ComponentFixture<C221Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C221Component]
    });
    fixture = TestBed.createComponent(C221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
