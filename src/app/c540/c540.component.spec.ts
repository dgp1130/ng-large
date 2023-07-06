import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C540Component } from './c540.component';

describe('C540Component', () => {
  let component: C540Component;
  let fixture: ComponentFixture<C540Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C540Component]
    });
    fixture = TestBed.createComponent(C540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
