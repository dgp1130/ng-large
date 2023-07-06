import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C906Component } from './c906.component';

describe('C906Component', () => {
  let component: C906Component;
  let fixture: ComponentFixture<C906Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C906Component]
    });
    fixture = TestBed.createComponent(C906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
