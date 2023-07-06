import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C188Component } from './c188.component';

describe('C188Component', () => {
  let component: C188Component;
  let fixture: ComponentFixture<C188Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C188Component]
    });
    fixture = TestBed.createComponent(C188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
