import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C978Component } from './c978.component';

describe('C978Component', () => {
  let component: C978Component;
  let fixture: ComponentFixture<C978Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C978Component]
    });
    fixture = TestBed.createComponent(C978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
