import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C935Component } from './c935.component';

describe('C935Component', () => {
  let component: C935Component;
  let fixture: ComponentFixture<C935Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C935Component]
    });
    fixture = TestBed.createComponent(C935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
