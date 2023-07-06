import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C181Component } from './c181.component';

describe('C181Component', () => {
  let component: C181Component;
  let fixture: ComponentFixture<C181Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C181Component]
    });
    fixture = TestBed.createComponent(C181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
