import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C19Component } from './c19.component';

describe('C19Component', () => {
  let component: C19Component;
  let fixture: ComponentFixture<C19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C19Component]
    });
    fixture = TestBed.createComponent(C19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
