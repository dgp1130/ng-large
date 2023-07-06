import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C205Component } from './c205.component';

describe('C205Component', () => {
  let component: C205Component;
  let fixture: ComponentFixture<C205Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C205Component]
    });
    fixture = TestBed.createComponent(C205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
