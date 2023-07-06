import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C539Component } from './c539.component';

describe('C539Component', () => {
  let component: C539Component;
  let fixture: ComponentFixture<C539Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C539Component]
    });
    fixture = TestBed.createComponent(C539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
