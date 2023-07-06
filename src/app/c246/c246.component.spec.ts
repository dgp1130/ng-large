import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C246Component } from './c246.component';

describe('C246Component', () => {
  let component: C246Component;
  let fixture: ComponentFixture<C246Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C246Component]
    });
    fixture = TestBed.createComponent(C246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
