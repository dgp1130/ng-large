import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C738Component } from './c738.component';

describe('C738Component', () => {
  let component: C738Component;
  let fixture: ComponentFixture<C738Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C738Component]
    });
    fixture = TestBed.createComponent(C738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
