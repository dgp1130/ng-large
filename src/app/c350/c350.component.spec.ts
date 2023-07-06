import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C350Component } from './c350.component';

describe('C350Component', () => {
  let component: C350Component;
  let fixture: ComponentFixture<C350Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C350Component]
    });
    fixture = TestBed.createComponent(C350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
