import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C922Component } from './c922.component';

describe('C922Component', () => {
  let component: C922Component;
  let fixture: ComponentFixture<C922Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C922Component]
    });
    fixture = TestBed.createComponent(C922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
