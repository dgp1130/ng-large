import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C434Component } from './c434.component';

describe('C434Component', () => {
  let component: C434Component;
  let fixture: ComponentFixture<C434Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C434Component]
    });
    fixture = TestBed.createComponent(C434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
