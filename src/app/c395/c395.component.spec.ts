import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C395Component } from './c395.component';

describe('C395Component', () => {
  let component: C395Component;
  let fixture: ComponentFixture<C395Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C395Component]
    });
    fixture = TestBed.createComponent(C395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
