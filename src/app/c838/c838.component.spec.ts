import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C838Component } from './c838.component';

describe('C838Component', () => {
  let component: C838Component;
  let fixture: ComponentFixture<C838Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C838Component]
    });
    fixture = TestBed.createComponent(C838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
