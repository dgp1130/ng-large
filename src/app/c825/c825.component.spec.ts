import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C825Component } from './c825.component';

describe('C825Component', () => {
  let component: C825Component;
  let fixture: ComponentFixture<C825Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C825Component]
    });
    fixture = TestBed.createComponent(C825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
