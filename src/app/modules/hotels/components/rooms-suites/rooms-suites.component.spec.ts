import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSuitesComponent } from './rooms-suites.component';

describe('RoomsSuitesComponent', () => {
  let component: RoomsSuitesComponent;
  let fixture: ComponentFixture<RoomsSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsSuitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
