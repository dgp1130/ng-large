import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C308Component } from './c308.component';

describe('C308Component', () => {
  let component: C308Component;
  let fixture: ComponentFixture<C308Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C308Component]
    });
    fixture = TestBed.createComponent(C308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
