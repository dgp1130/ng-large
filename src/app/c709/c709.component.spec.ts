import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C709Component } from './c709.component';

describe('C709Component', () => {
  let component: C709Component;
  let fixture: ComponentFixture<C709Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C709Component]
    });
    fixture = TestBed.createComponent(C709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
