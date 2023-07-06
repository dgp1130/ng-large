import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C557Component } from './c557.component';

describe('C557Component', () => {
  let component: C557Component;
  let fixture: ComponentFixture<C557Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C557Component]
    });
    fixture = TestBed.createComponent(C557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
