import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C116Component } from './c116.component';

describe('C116Component', () => {
  let component: C116Component;
  let fixture: ComponentFixture<C116Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C116Component]
    });
    fixture = TestBed.createComponent(C116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
