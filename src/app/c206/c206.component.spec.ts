import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C206Component } from './c206.component';

describe('C206Component', () => {
  let component: C206Component;
  let fixture: ComponentFixture<C206Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C206Component]
    });
    fixture = TestBed.createComponent(C206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
