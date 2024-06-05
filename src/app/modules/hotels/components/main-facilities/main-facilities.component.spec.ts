import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFacilitiesComponent } from './main-facilities.component';

describe('MainFacilitiesComponent', () => {
  let component: MainFacilitiesComponent;
  let fixture: ComponentFixture<MainFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
