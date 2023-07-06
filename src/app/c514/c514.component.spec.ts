import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C514Component } from './c514.component';

describe('C514Component', () => {
  let component: C514Component;
  let fixture: ComponentFixture<C514Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C514Component]
    });
    fixture = TestBed.createComponent(C514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
