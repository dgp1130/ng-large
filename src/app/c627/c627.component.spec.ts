import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C627Component } from './c627.component';

describe('C627Component', () => {
  let component: C627Component;
  let fixture: ComponentFixture<C627Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C627Component]
    });
    fixture = TestBed.createComponent(C627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
