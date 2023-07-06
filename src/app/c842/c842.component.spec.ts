import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C842Component } from './c842.component';

describe('C842Component', () => {
  let component: C842Component;
  let fixture: ComponentFixture<C842Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C842Component]
    });
    fixture = TestBed.createComponent(C842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
