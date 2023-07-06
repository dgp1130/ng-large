import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C26Component } from './c26.component';

describe('C26Component', () => {
  let component: C26Component;
  let fixture: ComponentFixture<C26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C26Component]
    });
    fixture = TestBed.createComponent(C26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
