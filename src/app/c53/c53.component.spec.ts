import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C53Component } from './c53.component';

describe('C53Component', () => {
  let component: C53Component;
  let fixture: ComponentFixture<C53Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C53Component]
    });
    fixture = TestBed.createComponent(C53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
