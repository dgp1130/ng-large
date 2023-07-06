import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C52Component } from './c52.component';

describe('C52Component', () => {
  let component: C52Component;
  let fixture: ComponentFixture<C52Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C52Component]
    });
    fixture = TestBed.createComponent(C52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
