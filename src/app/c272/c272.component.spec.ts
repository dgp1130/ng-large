import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C272Component } from './c272.component';

describe('C272Component', () => {
  let component: C272Component;
  let fixture: ComponentFixture<C272Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C272Component]
    });
    fixture = TestBed.createComponent(C272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
