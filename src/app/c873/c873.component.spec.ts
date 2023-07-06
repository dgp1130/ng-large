import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C873Component } from './c873.component';

describe('C873Component', () => {
  let component: C873Component;
  let fixture: ComponentFixture<C873Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C873Component]
    });
    fixture = TestBed.createComponent(C873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
