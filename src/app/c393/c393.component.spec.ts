import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C393Component } from './c393.component';

describe('C393Component', () => {
  let component: C393Component;
  let fixture: ComponentFixture<C393Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C393Component]
    });
    fixture = TestBed.createComponent(C393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
