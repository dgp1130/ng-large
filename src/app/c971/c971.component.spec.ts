import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C971Component } from './c971.component';

describe('C971Component', () => {
  let component: C971Component;
  let fixture: ComponentFixture<C971Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C971Component]
    });
    fixture = TestBed.createComponent(C971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
