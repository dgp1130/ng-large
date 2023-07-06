import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C141Component } from './c141.component';

describe('C141Component', () => {
  let component: C141Component;
  let fixture: ComponentFixture<C141Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C141Component]
    });
    fixture = TestBed.createComponent(C141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
