import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C166Component } from './c166.component';

describe('C166Component', () => {
  let component: C166Component;
  let fixture: ComponentFixture<C166Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C166Component]
    });
    fixture = TestBed.createComponent(C166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
