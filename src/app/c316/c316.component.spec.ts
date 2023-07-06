import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C316Component } from './c316.component';

describe('C316Component', () => {
  let component: C316Component;
  let fixture: ComponentFixture<C316Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C316Component]
    });
    fixture = TestBed.createComponent(C316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
