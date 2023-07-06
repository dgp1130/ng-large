import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C619Component } from './c619.component';

describe('C619Component', () => {
  let component: C619Component;
  let fixture: ComponentFixture<C619Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C619Component]
    });
    fixture = TestBed.createComponent(C619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
