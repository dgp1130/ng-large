import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C324Component } from './c324.component';

describe('C324Component', () => {
  let component: C324Component;
  let fixture: ComponentFixture<C324Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C324Component]
    });
    fixture = TestBed.createComponent(C324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
