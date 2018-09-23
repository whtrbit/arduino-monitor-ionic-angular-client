import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityPage } from './proximity.page';

describe('ProximityPage', () => {
  let component: ProximityPage;
  let fixture: ComponentFixture<ProximityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
