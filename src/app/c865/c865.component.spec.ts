import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C865Component } from './c865.component';

describe('C865Component', () => {
  let component: C865Component;
  let fixture: ComponentFixture<C865Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C865Component]
    });
    fixture = TestBed.createComponent(C865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
