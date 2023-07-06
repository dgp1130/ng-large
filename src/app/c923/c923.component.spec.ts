import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C923Component } from './c923.component';

describe('C923Component', () => {
  let component: C923Component;
  let fixture: ComponentFixture<C923Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C923Component]
    });
    fixture = TestBed.createComponent(C923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
