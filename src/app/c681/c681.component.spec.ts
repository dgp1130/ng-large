import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C681Component } from './c681.component';

describe('C681Component', () => {
  let component: C681Component;
  let fixture: ComponentFixture<C681Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C681Component]
    });
    fixture = TestBed.createComponent(C681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
