import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C830Component } from './c830.component';

describe('C830Component', () => {
  let component: C830Component;
  let fixture: ComponentFixture<C830Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C830Component]
    });
    fixture = TestBed.createComponent(C830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
