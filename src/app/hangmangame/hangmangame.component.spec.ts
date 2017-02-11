/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HangmangameComponent } from './hangmangame.component';

describe('HangmangameComponent', () => {
  let component: HangmangameComponent;
  let fixture: ComponentFixture<HangmangameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmangameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmangameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
