import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C912Component } from './c912.component';

describe('C912Component', () => {
  let component: C912Component;
  let fixture: ComponentFixture<C912Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C912Component]
    });
    fixture = TestBed.createComponent(C912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
