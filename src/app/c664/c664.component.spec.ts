import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C664Component } from './c664.component';

describe('C664Component', () => {
  let component: C664Component;
  let fixture: ComponentFixture<C664Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C664Component]
    });
    fixture = TestBed.createComponent(C664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
