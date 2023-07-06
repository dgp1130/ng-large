import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C118Component } from './c118.component';

describe('C118Component', () => {
  let component: C118Component;
  let fixture: ComponentFixture<C118Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C118Component]
    });
    fixture = TestBed.createComponent(C118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
