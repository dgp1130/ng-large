import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C102Component } from './c102.component';

describe('C102Component', () => {
  let component: C102Component;
  let fixture: ComponentFixture<C102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C102Component]
    });
    fixture = TestBed.createComponent(C102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
