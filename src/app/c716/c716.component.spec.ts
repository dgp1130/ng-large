import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C716Component } from './c716.component';

describe('C716Component', () => {
  let component: C716Component;
  let fixture: ComponentFixture<C716Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C716Component]
    });
    fixture = TestBed.createComponent(C716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
