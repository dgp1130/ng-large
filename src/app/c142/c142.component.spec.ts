import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C142Component } from './c142.component';

describe('C142Component', () => {
  let component: C142Component;
  let fixture: ComponentFixture<C142Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C142Component]
    });
    fixture = TestBed.createComponent(C142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
