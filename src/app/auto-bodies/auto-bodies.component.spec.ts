import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBodiesComponent } from './auto-bodies.component';

describe('AutoBodiesComponent', () => {
  let component: AutoBodiesComponent;
  let fixture: ComponentFixture<AutoBodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoBodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
