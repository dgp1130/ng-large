import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C856Component } from './c856.component';

describe('C856Component', () => {
  let component: C856Component;
  let fixture: ComponentFixture<C856Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C856Component]
    });
    fixture = TestBed.createComponent(C856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
