import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C129Component } from './c129.component';

describe('C129Component', () => {
  let component: C129Component;
  let fixture: ComponentFixture<C129Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C129Component]
    });
    fixture = TestBed.createComponent(C129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
