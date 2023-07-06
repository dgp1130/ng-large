import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C330Component } from './c330.component';

describe('C330Component', () => {
  let component: C330Component;
  let fixture: ComponentFixture<C330Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C330Component]
    });
    fixture = TestBed.createComponent(C330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
