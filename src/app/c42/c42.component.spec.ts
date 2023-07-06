import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C42Component } from './c42.component';

describe('C42Component', () => {
  let component: C42Component;
  let fixture: ComponentFixture<C42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C42Component]
    });
    fixture = TestBed.createComponent(C42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
