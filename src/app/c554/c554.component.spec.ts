import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C554Component } from './c554.component';

describe('C554Component', () => {
  let component: C554Component;
  let fixture: ComponentFixture<C554Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C554Component]
    });
    fixture = TestBed.createComponent(C554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
