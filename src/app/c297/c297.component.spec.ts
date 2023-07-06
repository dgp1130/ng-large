import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C297Component } from './c297.component';

describe('C297Component', () => {
  let component: C297Component;
  let fixture: ComponentFixture<C297Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C297Component]
    });
    fixture = TestBed.createComponent(C297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
