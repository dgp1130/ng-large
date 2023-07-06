import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C125Component } from './c125.component';

describe('C125Component', () => {
  let component: C125Component;
  let fixture: ComponentFixture<C125Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C125Component]
    });
    fixture = TestBed.createComponent(C125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
