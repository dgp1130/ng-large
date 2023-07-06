import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C402Component } from './c402.component';

describe('C402Component', () => {
  let component: C402Component;
  let fixture: ComponentFixture<C402Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C402Component]
    });
    fixture = TestBed.createComponent(C402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
