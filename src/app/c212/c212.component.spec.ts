import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C212Component } from './c212.component';

describe('C212Component', () => {
  let component: C212Component;
  let fixture: ComponentFixture<C212Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C212Component]
    });
    fixture = TestBed.createComponent(C212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
