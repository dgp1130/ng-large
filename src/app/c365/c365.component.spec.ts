import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C365Component } from './c365.component';

describe('C365Component', () => {
  let component: C365Component;
  let fixture: ComponentFixture<C365Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C365Component]
    });
    fixture = TestBed.createComponent(C365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
