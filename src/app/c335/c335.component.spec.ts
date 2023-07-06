import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C335Component } from './c335.component';

describe('C335Component', () => {
  let component: C335Component;
  let fixture: ComponentFixture<C335Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C335Component]
    });
    fixture = TestBed.createComponent(C335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
