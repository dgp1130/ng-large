import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C162Component } from './c162.component';

describe('C162Component', () => {
  let component: C162Component;
  let fixture: ComponentFixture<C162Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C162Component]
    });
    fixture = TestBed.createComponent(C162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
