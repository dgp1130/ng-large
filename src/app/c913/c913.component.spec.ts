import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C913Component } from './c913.component';

describe('C913Component', () => {
  let component: C913Component;
  let fixture: ComponentFixture<C913Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C913Component]
    });
    fixture = TestBed.createComponent(C913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
