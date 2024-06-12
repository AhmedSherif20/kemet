import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCrewComponent } from './all-crew.component';

describe('AllCrewComponent', () => {
  let component: AllCrewComponent;
  let fixture: ComponentFixture<AllCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
