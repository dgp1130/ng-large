import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C108Component } from './c108.component';

describe('C108Component', () => {
  let component: C108Component;
  let fixture: ComponentFixture<C108Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C108Component]
    });
    fixture = TestBed.createComponent(C108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
