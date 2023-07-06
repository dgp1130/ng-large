import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C65Component } from './c65.component';

describe('C65Component', () => {
  let component: C65Component;
  let fixture: ComponentFixture<C65Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C65Component]
    });
    fixture = TestBed.createComponent(C65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
