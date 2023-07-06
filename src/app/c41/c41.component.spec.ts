import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C41Component } from './c41.component';

describe('C41Component', () => {
  let component: C41Component;
  let fixture: ComponentFixture<C41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C41Component]
    });
    fixture = TestBed.createComponent(C41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
