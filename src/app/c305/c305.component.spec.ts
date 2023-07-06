import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C305Component } from './c305.component';

describe('C305Component', () => {
  let component: C305Component;
  let fixture: ComponentFixture<C305Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C305Component]
    });
    fixture = TestBed.createComponent(C305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
