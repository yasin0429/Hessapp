/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayitOlComponent } from './kayit-ol.component';

describe('KayitOlComponent', () => {
  let component: KayitOlComponent;
  let fixture: ComponentFixture<KayitOlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitOlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
