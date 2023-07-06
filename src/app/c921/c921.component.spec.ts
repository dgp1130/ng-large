import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C921Component } from './c921.component';

describe('C921Component', () => {
  let component: C921Component;
  let fixture: ComponentFixture<C921Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C921Component]
    });
    fixture = TestBed.createComponent(C921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
