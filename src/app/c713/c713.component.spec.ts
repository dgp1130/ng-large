import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C713Component } from './c713.component';

describe('C713Component', () => {
  let component: C713Component;
  let fixture: ComponentFixture<C713Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C713Component]
    });
    fixture = TestBed.createComponent(C713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
