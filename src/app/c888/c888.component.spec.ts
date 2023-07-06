import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C888Component } from './c888.component';

describe('C888Component', () => {
  let component: C888Component;
  let fixture: ComponentFixture<C888Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C888Component]
    });
    fixture = TestBed.createComponent(C888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
