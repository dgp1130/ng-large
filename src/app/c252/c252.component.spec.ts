import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C252Component } from './c252.component';

describe('C252Component', () => {
  let component: C252Component;
  let fixture: ComponentFixture<C252Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C252Component]
    });
    fixture = TestBed.createComponent(C252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
