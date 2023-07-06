import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C969Component } from './c969.component';

describe('C969Component', () => {
  let component: C969Component;
  let fixture: ComponentFixture<C969Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C969Component]
    });
    fixture = TestBed.createComponent(C969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
