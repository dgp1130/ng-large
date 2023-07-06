import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C241Component } from './c241.component';

describe('C241Component', () => {
  let component: C241Component;
  let fixture: ComponentFixture<C241Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C241Component]
    });
    fixture = TestBed.createComponent(C241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
