import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C999Component } from './c999.component';

describe('C999Component', () => {
  let component: C999Component;
  let fixture: ComponentFixture<C999Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C999Component]
    });
    fixture = TestBed.createComponent(C999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
