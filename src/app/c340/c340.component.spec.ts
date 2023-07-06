import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C340Component } from './c340.component';

describe('C340Component', () => {
  let component: C340Component;
  let fixture: ComponentFixture<C340Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C340Component]
    });
    fixture = TestBed.createComponent(C340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
