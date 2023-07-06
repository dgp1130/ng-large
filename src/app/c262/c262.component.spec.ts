import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C262Component } from './c262.component';

describe('C262Component', () => {
  let component: C262Component;
  let fixture: ComponentFixture<C262Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C262Component]
    });
    fixture = TestBed.createComponent(C262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
