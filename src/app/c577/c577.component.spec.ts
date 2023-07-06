import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C577Component } from './c577.component';

describe('C577Component', () => {
  let component: C577Component;
  let fixture: ComponentFixture<C577Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C577Component]
    });
    fixture = TestBed.createComponent(C577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
