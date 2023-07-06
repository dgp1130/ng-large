import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C870Component } from './c870.component';

describe('C870Component', () => {
  let component: C870Component;
  let fixture: ComponentFixture<C870Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C870Component]
    });
    fixture = TestBed.createComponent(C870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
