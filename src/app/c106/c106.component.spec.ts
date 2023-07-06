import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C106Component } from './c106.component';

describe('C106Component', () => {
  let component: C106Component;
  let fixture: ComponentFixture<C106Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C106Component]
    });
    fixture = TestBed.createComponent(C106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
