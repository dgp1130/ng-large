import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C621Component } from './c621.component';

describe('C621Component', () => {
  let component: C621Component;
  let fixture: ComponentFixture<C621Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C621Component]
    });
    fixture = TestBed.createComponent(C621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
