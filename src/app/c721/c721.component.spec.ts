import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C721Component } from './c721.component';

describe('C721Component', () => {
  let component: C721Component;
  let fixture: ComponentFixture<C721Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C721Component]
    });
    fixture = TestBed.createComponent(C721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
