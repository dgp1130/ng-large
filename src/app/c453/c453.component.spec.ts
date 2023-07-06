import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C453Component } from './c453.component';

describe('C453Component', () => {
  let component: C453Component;
  let fixture: ComponentFixture<C453Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C453Component]
    });
    fixture = TestBed.createComponent(C453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
