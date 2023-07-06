import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C663Component } from './c663.component';

describe('C663Component', () => {
  let component: C663Component;
  let fixture: ComponentFixture<C663Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C663Component]
    });
    fixture = TestBed.createComponent(C663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
