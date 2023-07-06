import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C243Component } from './c243.component';

describe('C243Component', () => {
  let component: C243Component;
  let fixture: ComponentFixture<C243Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C243Component]
    });
    fixture = TestBed.createComponent(C243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
