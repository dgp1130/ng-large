import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C555Component } from './c555.component';

describe('C555Component', () => {
  let component: C555Component;
  let fixture: ComponentFixture<C555Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C555Component]
    });
    fixture = TestBed.createComponent(C555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
