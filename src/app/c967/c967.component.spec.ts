import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C967Component } from './c967.component';

describe('C967Component', () => {
  let component: C967Component;
  let fixture: ComponentFixture<C967Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C967Component]
    });
    fixture = TestBed.createComponent(C967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
