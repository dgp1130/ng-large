import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C218Component } from './c218.component';

describe('C218Component', () => {
  let component: C218Component;
  let fixture: ComponentFixture<C218Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C218Component]
    });
    fixture = TestBed.createComponent(C218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
