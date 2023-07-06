import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C598Component } from './c598.component';

describe('C598Component', () => {
  let component: C598Component;
  let fixture: ComponentFixture<C598Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C598Component]
    });
    fixture = TestBed.createComponent(C598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
