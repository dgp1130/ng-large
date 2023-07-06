import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C203Component } from './c203.component';

describe('C203Component', () => {
  let component: C203Component;
  let fixture: ComponentFixture<C203Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C203Component]
    });
    fixture = TestBed.createComponent(C203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
