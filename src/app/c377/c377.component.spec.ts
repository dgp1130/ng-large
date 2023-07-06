import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C377Component } from './c377.component';

describe('C377Component', () => {
  let component: C377Component;
  let fixture: ComponentFixture<C377Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C377Component]
    });
    fixture = TestBed.createComponent(C377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
