import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C821Component } from './c821.component';

describe('C821Component', () => {
  let component: C821Component;
  let fixture: ComponentFixture<C821Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C821Component]
    });
    fixture = TestBed.createComponent(C821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
