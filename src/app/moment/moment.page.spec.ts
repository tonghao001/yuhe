import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentPage } from './moment.page';

describe('MomentPage', () => {
  let component: MomentPage;
  let fixture: ComponentFixture<MomentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MomentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
