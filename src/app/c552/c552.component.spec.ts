import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C552Component } from './c552.component';

describe('C552Component', () => {
  let component: C552Component;
  let fixture: ComponentFixture<C552Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C552Component]
    });
    fixture = TestBed.createComponent(C552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
