import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C670Component } from './c670.component';

describe('C670Component', () => {
  let component: C670Component;
  let fixture: ComponentFixture<C670Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C670Component]
    });
    fixture = TestBed.createComponent(C670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
