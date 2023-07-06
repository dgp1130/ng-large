import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C952Component } from './c952.component';

describe('C952Component', () => {
  let component: C952Component;
  let fixture: ComponentFixture<C952Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C952Component]
    });
    fixture = TestBed.createComponent(C952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
