/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemoAutorepairComponent } from './memo-autorepair.component';

describe('MemoAutorepairComponent', () => {
  let component: MemoAutorepairComponent;
  let fixture: ComponentFixture<MemoAutorepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoAutorepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoAutorepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
