import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C381Component } from './c381.component';

describe('C381Component', () => {
  let component: C381Component;
  let fixture: ComponentFixture<C381Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C381Component]
    });
    fixture = TestBed.createComponent(C381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
