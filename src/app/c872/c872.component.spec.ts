import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C872Component } from './c872.component';

describe('C872Component', () => {
  let component: C872Component;
  let fixture: ComponentFixture<C872Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C872Component]
    });
    fixture = TestBed.createComponent(C872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
