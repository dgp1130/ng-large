import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C441Component } from './c441.component';

describe('C441Component', () => {
  let component: C441Component;
  let fixture: ComponentFixture<C441Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C441Component]
    });
    fixture = TestBed.createComponent(C441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
