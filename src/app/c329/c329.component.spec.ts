import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C329Component } from './c329.component';

describe('C329Component', () => {
  let component: C329Component;
  let fixture: ComponentFixture<C329Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C329Component]
    });
    fixture = TestBed.createComponent(C329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
