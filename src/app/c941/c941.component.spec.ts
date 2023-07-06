import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C941Component } from './c941.component';

describe('C941Component', () => {
  let component: C941Component;
  let fixture: ComponentFixture<C941Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C941Component]
    });
    fixture = TestBed.createComponent(C941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
