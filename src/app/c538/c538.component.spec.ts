import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C538Component } from './c538.component';

describe('C538Component', () => {
  let component: C538Component;
  let fixture: ComponentFixture<C538Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C538Component]
    });
    fixture = TestBed.createComponent(C538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
