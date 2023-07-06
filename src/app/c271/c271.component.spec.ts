import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C271Component } from './c271.component';

describe('C271Component', () => {
  let component: C271Component;
  let fixture: ComponentFixture<C271Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C271Component]
    });
    fixture = TestBed.createComponent(C271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
