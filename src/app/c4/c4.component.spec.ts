import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4Component } from './c4.component';

describe('C4Component', () => {
  let component: C4Component;
  let fixture: ComponentFixture<C4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C4Component]
    });
    fixture = TestBed.createComponent(C4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
