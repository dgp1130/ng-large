import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C839Component } from './c839.component';

describe('C839Component', () => {
  let component: C839Component;
  let fixture: ComponentFixture<C839Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C839Component]
    });
    fixture = TestBed.createComponent(C839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
