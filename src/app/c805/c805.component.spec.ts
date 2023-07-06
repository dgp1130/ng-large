import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C805Component } from './c805.component';

describe('C805Component', () => {
  let component: C805Component;
  let fixture: ComponentFixture<C805Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C805Component]
    });
    fixture = TestBed.createComponent(C805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
