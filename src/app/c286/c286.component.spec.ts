import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C286Component } from './c286.component';

describe('C286Component', () => {
  let component: C286Component;
  let fixture: ComponentFixture<C286Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C286Component]
    });
    fixture = TestBed.createComponent(C286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
