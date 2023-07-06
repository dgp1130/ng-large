import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C158Component } from './c158.component';

describe('C158Component', () => {
  let component: C158Component;
  let fixture: ComponentFixture<C158Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C158Component]
    });
    fixture = TestBed.createComponent(C158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
