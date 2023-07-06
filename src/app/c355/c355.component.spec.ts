import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C355Component } from './c355.component';

describe('C355Component', () => {
  let component: C355Component;
  let fixture: ComponentFixture<C355Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C355Component]
    });
    fixture = TestBed.createComponent(C355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
