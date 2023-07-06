import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C147Component } from './c147.component';

describe('C147Component', () => {
  let component: C147Component;
  let fixture: ComponentFixture<C147Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C147Component]
    });
    fixture = TestBed.createComponent(C147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
