import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C390Component } from './c390.component';

describe('C390Component', () => {
  let component: C390Component;
  let fixture: ComponentFixture<C390Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C390Component]
    });
    fixture = TestBed.createComponent(C390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
