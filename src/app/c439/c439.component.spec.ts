import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C439Component } from './c439.component';

describe('C439Component', () => {
  let component: C439Component;
  let fixture: ComponentFixture<C439Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C439Component]
    });
    fixture = TestBed.createComponent(C439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
