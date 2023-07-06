import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C46Component } from './c46.component';

describe('C46Component', () => {
  let component: C46Component;
  let fixture: ComponentFixture<C46Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C46Component]
    });
    fixture = TestBed.createComponent(C46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
