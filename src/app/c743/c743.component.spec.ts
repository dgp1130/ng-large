import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C743Component } from './c743.component';

describe('C743Component', () => {
  let component: C743Component;
  let fixture: ComponentFixture<C743Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C743Component]
    });
    fixture = TestBed.createComponent(C743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
