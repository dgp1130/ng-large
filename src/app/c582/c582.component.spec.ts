import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C582Component } from './c582.component';

describe('C582Component', () => {
  let component: C582Component;
  let fixture: ComponentFixture<C582Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C582Component]
    });
    fixture = TestBed.createComponent(C582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
