import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C793Component } from './c793.component';

describe('C793Component', () => {
  let component: C793Component;
  let fixture: ComponentFixture<C793Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C793Component]
    });
    fixture = TestBed.createComponent(C793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
