import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1000Component } from './c1000.component';

describe('C1000Component', () => {
  let component: C1000Component;
  let fixture: ComponentFixture<C1000Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C1000Component]
    });
    fixture = TestBed.createComponent(C1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
