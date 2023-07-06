import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C488Component } from './c488.component';

describe('C488Component', () => {
  let component: C488Component;
  let fixture: ComponentFixture<C488Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C488Component]
    });
    fixture = TestBed.createComponent(C488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
