import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C748Component } from './c748.component';

describe('C748Component', () => {
  let component: C748Component;
  let fixture: ComponentFixture<C748Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C748Component]
    });
    fixture = TestBed.createComponent(C748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
