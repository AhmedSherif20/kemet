import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAmenitiesComponent } from './local-amenities.component';

describe('LocalAmenitiesComponent', () => {
  let component: LocalAmenitiesComponent;
  let fixture: ComponentFixture<LocalAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
