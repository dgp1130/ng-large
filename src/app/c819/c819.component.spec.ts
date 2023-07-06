import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C819Component } from './c819.component';

describe('C819Component', () => {
  let component: C819Component;
  let fixture: ComponentFixture<C819Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C819Component]
    });
    fixture = TestBed.createComponent(C819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
