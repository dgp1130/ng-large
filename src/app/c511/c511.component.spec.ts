import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C511Component } from './c511.component';

describe('C511Component', () => {
  let component: C511Component;
  let fixture: ComponentFixture<C511Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C511Component]
    });
    fixture = TestBed.createComponent(C511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
