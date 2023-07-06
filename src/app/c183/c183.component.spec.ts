import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C183Component } from './c183.component';

describe('C183Component', () => {
  let component: C183Component;
  let fixture: ComponentFixture<C183Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C183Component]
    });
    fixture = TestBed.createComponent(C183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
