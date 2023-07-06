import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C495Component } from './c495.component';

describe('C495Component', () => {
  let component: C495Component;
  let fixture: ComponentFixture<C495Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C495Component]
    });
    fixture = TestBed.createComponent(C495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
