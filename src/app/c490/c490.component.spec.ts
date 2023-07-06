import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C490Component } from './c490.component';

describe('C490Component', () => {
  let component: C490Component;
  let fixture: ComponentFixture<C490Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C490Component]
    });
    fixture = TestBed.createComponent(C490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
