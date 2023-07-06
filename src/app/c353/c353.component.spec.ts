import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C353Component } from './c353.component';

describe('C353Component', () => {
  let component: C353Component;
  let fixture: ComponentFixture<C353Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C353Component]
    });
    fixture = TestBed.createComponent(C353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
