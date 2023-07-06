import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C452Component } from './c452.component';

describe('C452Component', () => {
  let component: C452Component;
  let fixture: ComponentFixture<C452Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C452Component]
    });
    fixture = TestBed.createComponent(C452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
