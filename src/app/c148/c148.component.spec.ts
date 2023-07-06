import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C148Component } from './c148.component';

describe('C148Component', () => {
  let component: C148Component;
  let fixture: ComponentFixture<C148Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C148Component]
    });
    fixture = TestBed.createComponent(C148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
